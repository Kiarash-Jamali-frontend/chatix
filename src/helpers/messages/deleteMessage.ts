import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default function deleteMessage(id: string, isGroupMessage?: boolean) {
    deleteDoc(doc(db, isGroupMessage ? "group_message" : "chat_message", id));
}