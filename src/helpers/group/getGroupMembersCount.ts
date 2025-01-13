import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default function getGroupMembersCount(groupId: string, callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => unknown) {
    const groupMembersQuery = query(collection(db, "group_member"), where("groupId", "==", groupId));
    const unsubGroupMembersCount = onSnapshot(groupMembersQuery, callback);

    return () => unsubGroupMembersCount();
}