import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Profile from "../../types/Profile";
import { collection, doc, getDoc, getDocs, query, runTransaction, where } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../../helpers/files/getFileExt";
import StickerPack from "../../types/StickerPack";

export type UserState = {
    data: {
        email: string,
    } | null,
    profile: (Profile & { id: string, stickerPacks?: StickerPack[] }) | null;
    status: "loading" | "authenticated" | "unauthenticated"
}

const initialState: UserState = {
    data: null,
    profile: null,
    status: "loading"
}

export const getUserProfile = createAsyncThunk("user/getUserProfile", async (email: string) => {
    const docRef = doc(db, "profile", email);
    const docSnap = await getDoc(docRef);
    const docSnapData = docSnap.data() as Profile;
    const stickerPacksQuery = query(collection(db, "sticker_pack"), where("id", "in", docSnapData.stickerPacksIds));
    const stickerPacksDocsSnap = await getDocs(stickerPacksQuery);
    const stickerPacks = stickerPacksDocsSnap.docs.map((document) => {
        return document.data() as StickerPack;
    })
    return {
        ...docSnapData,
        id: docSnap.id,
        stickerPacks
    }
});

export const changeUserProfile = createAsyncThunk("user/changeUserProfile", async ({ userEmail, name, biography, profileImage, defaultProfileUrl }:
    { userEmail: string, name: string, biography: string, profileImage: File | null, defaultProfileUrl: string }) => {
    let profileUrl = defaultProfileUrl;
    if (profileImage) {
        if (defaultProfileUrl) {
            const deletedProfileRef = ref(storage, `profiles/${userEmail}/${userEmail}.${getFileExt(defaultProfileUrl)}`);
            await deleteObject(deletedProfileRef);
        }
        const profileRef = ref(storage, `profiles/${userEmail}/${userEmail}.${getFileExt(profileImage.name)}`);
        await uploadBytes(profileRef, profileImage);
        profileUrl = await getDownloadURL(profileRef);
    }

    await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "profile", userEmail), profileUrl ? {
            name,
            biography,
            photoUrl: profileUrl
        } : {
            name,
            biography
        });
    });

    return {
        name,
        biography,
        photoUrl: profileUrl
    }
});

export const deleteProfileImage = createAsyncThunk("user/deleteProfileImage", async ({ userEmail, profileUrl }: { userEmail: string, profileUrl: string }) => {
    const profileRef = ref(storage, `profiles/${userEmail}/${userEmail}.${getFileExt(profileUrl)}`);
    await deleteObject(profileRef);
    await runTransaction(db, async (transaction) => {
        transaction.update(doc(db, "profile", userEmail), {
            photoUrl: ""
        })
    });
})

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUserData: (state, action: PayloadAction<UserState['data']>) => {
            localStorage.setItem("chatix_user_data", JSON.stringify(action.payload));
            state.data = action.payload;
        },
        changeUserStatus: (state, action: PayloadAction<UserState['status']>) => {
            state.status = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            localStorage.setItem("chatix_user_profile", JSON.stringify(action.payload));
            state.profile = action.payload;
        });
        builder.addCase(changeUserProfile.fulfilled, (state, action) => {
            if (state.profile) {
                localStorage.setItem("chatix_user_profile", JSON.stringify(action.payload));
                state.profile = {
                    ...state.profile,
                    ...action.payload
                };
            }
        });
        builder.addCase(deleteProfileImage.fulfilled, ({ profile }) => {
            localStorage.setItem("chatix_user_profile", JSON.stringify(profile));
            if (profile) profile.photoUrl = "";
        })
    },
});

export default user.reducer;

export const { changeUserData, changeUserStatus } = user.actions;