import { and, collection, deleteDoc, doc, getDocs, or, query, where } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteObject, ref } from "firebase/storage";

export default async function deleteChat({ user1, user2, chatRoomId }: { user1: string, user2: string, chatRoomId: string }):
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
            await deleteDoc(doc(db, "chat_message", snapshot.id));
        });

        await deleteDoc(doc(db, "chat_room", chatRoomId));

        await deleteObject(ref(storage, `chats/${chatRoomId}`));

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