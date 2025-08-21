import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { MemberProfile } from "../../pages/Group";
import { SidebarGroupData } from "../../redux/slices/groups";
import { db } from "../../../utils/firebase";

export default async function deleteGroup({ groupData, membersProfiles }: {
    groupData: SidebarGroupData;
    membersProfiles: MemberProfile[];
}):
    Promise<{ successful: boolean, error: string | null }> {
    try {
        const q = query(collection(db, "group_message"), where("to", "==", groupData.id));

        const snapshot = await getDocs(q);
        snapshot.forEach((msgSnapshot) => {
            deleteDoc(doc(db, "group_message", msgSnapshot.id));
        });

        membersProfiles.forEach((mp) => {
            deleteDoc(doc(db, "group_member", mp.groupMemberDocId));
        })

        await deleteDoc(doc(db, "group", groupData.id));

        return {
            error: null,
            successful: true
        }
    } catch (e) {
        const { message } = e as Error;
        console.error(message);
        return {
            error: message,
            successful: false
        }
    }
}