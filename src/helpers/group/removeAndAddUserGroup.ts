import { doc, runTransaction } from "firebase/firestore";
import { db } from "../../../utils/firebase";

const removeAndAddUserGroup = async (id: string, action: "remove" | "add") => {
    await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "group_member", id), {
            removedFromGroup: action == "remove" ? true : false
        })
    });
}

export default removeAndAddUserGroup;