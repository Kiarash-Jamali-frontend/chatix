import { doc, runTransaction } from "firebase/firestore";
import { db } from "./firebase";

const changeReaction = async (msgId: string, reactionImageUrl: string) => {
    await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "chat_message", msgId), {
            reaction: reactionImageUrl ? `<img src="${reactionImageUrl}" style="display:inline;width:1.25em;height:1.25em" />` : ""
        })
    });
}

export default changeReaction;