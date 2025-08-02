import { Timestamp } from "firebase/firestore";

type Group = {
    id: string;
    creator: string;
    groupName: string;
    groupPhotoUrl: string;
    createdAt: Timestamp
}

export default Group;