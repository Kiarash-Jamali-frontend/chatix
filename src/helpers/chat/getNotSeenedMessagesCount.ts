import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default async function getNotSeenedMessagesCount(from: string, to: string) {
    const q = query(
        collection(db, "chat_message"),
        where("from", "==", from),
        where("to", "==", to),
        where("seen", "==", false)
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.size;
}