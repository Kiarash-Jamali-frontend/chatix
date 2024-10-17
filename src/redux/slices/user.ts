import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    data: {
        email: string,
    } | null,
    status: "loading" | "authenticated" | "unauthenticated"
}

const initialState: UserState = {
    data: null,
    status: "loading"
}

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
});

export default user.reducer;

export const changeUserData = user.actions.changeUserData;

export const changeUserStatus = user.actions.changeUserStatus;