import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Profile from "../../types/Profile";
import { doc, getDoc, runTransaction } from "firebase/firestore";
import { db, storage } from "../../helpers/firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import getFileExt from "../../helpers/getFileExt";

type UserState = {
    data: {
        email: string,
    } | null,
    profile: Profile | null;
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
    return {
        ...docSnap.data() as Profile,
    }
});

export const changeUserProfile = createAsyncThunk("user/changeUserProfile", async ({ userEmail, name, biography, profileImage, defaultProfileUrl }:
    { userEmail: string, name: string, biography: string, profileImage: File | null, defaultProfileUrl: string }) => {
    let profileUrl = defaultProfileUrl;
    if (profileImage) {
        const profileRef = ref(storage, `profiles/${userEmail}.${getFileExt(profileImage.name)}`);
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
    const profileRef = ref(storage, `profiles/${userEmail}.${getFileExt(profileUrl)}`);
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
            state.data = action.payload;
        },
        changeUserStatus: (state, action: PayloadAction<UserState['status']>) => {
            state.status = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
        builder.addCase(changeUserProfile.fulfilled, (state, action) => {
            if (state.profile) {
                state.profile = {
                    ...state.profile,
                    ...action.payload
                };
            }
        });
        builder.addCase(deleteProfileImage.fulfilled, ({ profile }) => {
            if (profile) profile.photoUrl = "";
        })
    },
});

export default user.reducer;

export const changeUserData = user.actions.changeUserData;
export const changeUserStatus = user.actions.changeUserStatus;