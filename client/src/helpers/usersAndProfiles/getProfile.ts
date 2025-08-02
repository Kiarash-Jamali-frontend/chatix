import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import Profile from "../../types/Profile";

export default async function getProfile(email: string): Promise<(Profile & { email: string }) | null> {
    const docRef = doc(db, "profile", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data() as Profile, email: docSnap.id };
    }

    return null;
}