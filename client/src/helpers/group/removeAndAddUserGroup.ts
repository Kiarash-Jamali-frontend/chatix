import { and, collection, deleteDoc, doc, getDocs, query, runTransaction, where } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteNotification } from "../../services/notificationService";
import { deleteObject, ref } from "firebase/storage";

const removeAndAddUserGroup = async (id: string, action: "remove" | "add", userEmail?: string, groupMembersRecipients?: string[]) => {
    await runTransaction(db, async (transaction) => {
        if (action == "remove" && userEmail) {
            const q = query(collection(db, "group_message"), and(
                where("from", "==", userEmail),
                where("to", "==", id)
            ),);

            const querySnap = await getDocs(q);

            querySnap.forEach(async (snapshot) => {
                const msgData = snapshot.data();

                if (msgData.type && (msgData.type === "image" || msgData.type === "video" || msgData.type === "audio" || msgData.type === "file" || msgData.type === "voice") && msgData.content) {
                    const fileRef = ref(storage, msgData.content);
                    await deleteObject(fileRef);
                }

                await deleteNotification(msgData.notificationId, snapshot.id, groupMembersRecipients || []);
                await deleteDoc(doc(db, "group_message", snapshot.id));
            });
        }
        transaction.update(doc(db, "group_member", id), {
            removedFromGroup: action == "remove" ? true : false
        })
    });
}

export default removeAndAddUserGroup;