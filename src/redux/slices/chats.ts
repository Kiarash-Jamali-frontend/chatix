import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import getNotSeenedMessagesCount from "../../helpers/getNotSeenedMessagesCount";
import Profile from "../../types/Profile";
import getProfile from "../../helpers/getProfile";

type ChatsState = {
    list: (Profile & { email: string, notSeenedMessages: number })[],
    status: "loading" | "success"
}

const initialState: ChatsState = {
    list: [],
    status: "loading"
};

export const getChats = createAsyncThunk("chats/getChats", async (userEmail: string) => {
    let chatsList: (Profile & { email: string, notSeenedMessages: number })[] = [];
    const q = query(
        collection(db, "chat_room"),
        or(
            where("user_1", "==", userEmail),
            where("user_2", "==", userEmail)
        )
    );
    return getDocs(q).then(async (querySnapshot) => {
        for (let i = 0; i < querySnapshot.size; i++) {
            const chatData = querySnapshot.docs[i].data();
            const oppositeUserEmail =
                userEmail === chatData.user_1
                    ? chatData.user_2
                    : chatData.user_1;

            const notSeenedMessagesCount = await getNotSeenedMessagesCount(oppositeUserEmail, userEmail);
            const profile = await getProfile(oppositeUserEmail);

            chatsList = [...chatsList, {
                ...profile!,
                notSeenedMessages: notSeenedMessagesCount
            }]
        }
    }).then(() => {
        return chatsList;
    })
});

export const addChat = createAsyncThunk("chats/addChat", async ({ user_1, user_2 }: { user_1: string, user_2: string }) => {
    const notSeenedMessages = await getNotSeenedMessagesCount(user_2, user_1);

    return {
        user_1,
        user_2,
        notSeenedMessages: notSeenedMessages,
        email: user_1
    }
})

const chats = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getChats.fulfilled, (state, action) => {
            state.list = action.payload!;
            state.status = "success";
        });
        // builder.addCase(addChat.fulfilled, (state, { payload }) => {
        //     state.list = [...state.list, {
        //         user_1: payload.user_1,
        //         user_2: payload.user_2,
        //         notSeenedMessages: payload.notSeenedMessages,
        //         email: payload.email
        //     }];
        // })
    },
})

export default chats.reducer;