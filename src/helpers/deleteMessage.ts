import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default function deleteMessage(id: string) {
    deleteDoc(doc(db, "chat_message", id));
}