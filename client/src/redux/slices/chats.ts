import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timestamp } from "firebase/firestore";
import Profile from "../../types/Profile";

export type ChatData = (Profile & { email: string, createdAt: Timestamp });

export type ChatsState = {
    list: ChatData[],
    status: "loading" | "success" | "userUnauthenticated"
}

const initialState: ChatsState = {
    list: [],
    status: "loading"
};

const chats = createSlice({
    name: "chats",
    initialState,
    reducers: {
        changeChatsStatus(state, action: PayloadAction<ChatsState['status']>) {
            state.status = action.payload;
        },
        changeChatsList(state, action: PayloadAction<ChatsState['list']>) {
            state.list = action.payload;
        }
    },
})

export default chats.reducer;

export const { changeChatsList, changeChatsStatus } = chats.actions;