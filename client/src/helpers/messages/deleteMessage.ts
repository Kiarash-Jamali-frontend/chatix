import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteNotification } from "../../services/notificationService";
import { deleteObject, ref } from "firebase/storage";

type DeleteMessage = {
    id: string;
    notificationId?: string;
    recipientIds?: string[];
    isGroupMessage?: boolean;
    fileAddress?: string;
}

export default function deleteMessage(
    { id, fileAddress, isGroupMessage = false, notificationId, recipientIds }: DeleteMessage
) {
    if (notificationId && recipientIds) {
        deleteNotification(notificationId, id, recipientIds);
    }
    if (fileAddress) {
        const fileRef = ref(storage, fileAddress);
        deleteObject(fileRef);
    }
    deleteDoc(doc(db, isGroupMessage ? "group_message" : "chat_message", id));
}