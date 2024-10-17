import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Profile from "../../types/Profile";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../helpers/firebase";

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
        })
    },
});

export default user.reducer;

export const changeUserData = user.actions.changeUserData;
export const changeUserStatus = user.actions.changeUserStatus;