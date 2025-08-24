import { and, collection, deleteDoc, doc, getDocs, or, query, where } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteObject, listAll, ref } from "firebase/storage";
import { deleteNotification, getOneSignalUserIdsFromFirebase } from "../../services/notificationService";

export default async function deleteChat({ user1, user2, chatRoomId, oppositeUserEmail }: {
    user1: string,
    user2: string,
    chatRoomId: string,
    oppositeUserEmail: string
}):
    Promise<{ successful: boolean, error: string | null }> {
    try {
        const q = query(collection(db, "chat_message"), or(
            and(
                where("from", "==", user1),
                where("to", "==", user2)
            ),
            and(
                where("from", "==", user2),
                where("to", "==", user1)
            )
        ));

        const querySnap = await getDocs(q);

        querySnap.forEach(async (snapshot) => {
            const msgData = snapshot.data();
            const recipientIds = await getOneSignalUserIdsFromFirebase(oppositeUserEmail);
            await deleteNotification(msgData.notificationId, snapshot.id, recipientIds);
            await deleteDoc(doc(db, "chat_message", snapshot.id));
        });

        await deleteDoc(doc(db, "chat_room", chatRoomId));


        const chatFilesRef = ref(storage, `chats/${chatRoomId}`);
        const list = await listAll(chatFilesRef);

        if (list.items.length) {
            await deleteObject(chatFilesRef);
        }

        return {
            successful: true,
            error: null
        }
    } catch (e) {
        const { message } = e as Error;
        console.error(message);
        return {
            error: message,
            successful: false
        }
    }
}