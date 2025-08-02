import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../../utils/firebase";

const changeReaction = async (msgId: string, reactionImageUrl: string, callbackFn?: () => void) => {
    await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "chat_message", msgId), {
            reaction: reactionImageUrl ? `<img src="${reactionImageUrl}" style="display:inline;width:1.25em;height:1.25em" />` : ""
        })
    });
    callbackFn && callbackFn();
}

export default changeReaction;