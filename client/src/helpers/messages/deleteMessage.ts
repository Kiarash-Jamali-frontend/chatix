import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { deleteNotification } from "../../services/notificationService";

export default function deleteMessage(id: string, notificationId?: string, isGroupMessage?: boolean) {
    if (notificationId) {
        deleteNotification(notificationId);
    }
    deleteDoc(doc(db, isGroupMessage ? "group_message" : "chat_message", id));
}