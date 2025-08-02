import { and, collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default function getGroupMembersCount(groupId: string, callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => unknown) {
    const groupMembersQuery = query(collection(db, "group_member"), and(
        where("groupId", "==", groupId),
        where("removedFromGroup", "==", false)
    ));
    const unsubGroupMembersCount = onSnapshot(groupMembersQuery, { includeMetadataChanges: true }, callback);

    return () => unsubGroupMembersCount();
}