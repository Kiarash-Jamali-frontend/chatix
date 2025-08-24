import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { MemberProfile } from "../../pages/Group";
import { SidebarGroupData } from "../../redux/slices/groups";
import { db, storage } from "../../../utils/firebase";
import { deleteObject, ref, listAll } from "firebase/storage";
import { deleteNotification } from "../../services/notificationService";

export default async function deleteGroup({ groupData, membersProfiles, groupMembersRecipients }: {
    groupData: SidebarGroupData;
    membersProfiles: MemberProfile[];
    groupMembersRecipients: string[];
}):
    Promise<{ successful: boolean, error: string | null }> {
    try {
        const q = query(collection(db, "group_message"), where("to", "==", groupData.id));

        const snapshot = await getDocs(q);
        snapshot.forEach((msgSnapshot) => {
            const msgData = msgSnapshot.data();
            deleteNotification(msgData.notificationId, msgSnapshot.id, groupMembersRecipients);
            deleteDoc(doc(db, "group_message", msgSnapshot.id));
        });

        const groupFilesRef = ref(storage, `groups/${groupData.id}`);
        const list = await listAll(groupFilesRef);

        if (list.items.length) {
            await deleteObject(groupFilesRef);
        }

        if (groupData.groupPhotoUrl) {
            await deleteObject(ref(storage, groupData.groupPhotoUrl));
        }

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