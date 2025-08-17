import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteNotification } from "../../services/notificationService";
import { deleteObject, ref } from "firebase/storage";
import MessageType from "../../types/MessageType";
import messageCollectionByType from "../../constants/messageCollectionByType";

type DeleteMessage = {
    id: string;
    notificationId?: string;
    recipientIds?: string[];
    type: MessageType;
    fileAddress?: string;
}

export default function deleteMessage(
    { id, fileAddress, type, notificationId, recipientIds }: DeleteMessage
) {
    if (notificationId && recipientIds?.length) {
        deleteNotification(notificationId, id, recipientIds);
    }
    if (fileAddress) {
        const fileRef = ref(storage, fileAddress);
        deleteObject(fileRef);
    }
    deleteDoc(doc(db, messageCollectionByType[type], id));
}