import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, or, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import getNotSeenedMessagesCount from "../../helpers/chat/getNotSeenedMessagesCount";
import Profile from "../../types/Profile";
import getProfile from "../../helpers/usersAndProfiles/getProfile";

type ChatsState = {
    list: (Profile & { email: string, notSeenedMessages: number })[],
    status: "loading" | "success" | "userUnauthenticated"
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
    const profile = await getProfile(user_2);

    return {
        ...profile!,
        notSeenedMessages: notSeenedMessages,
    }
})

const chats = createSlice({
    name: "chats",
    initialState,
    reducers: {
        changeChatsStatus(state, action: PayloadAction<ChatsState['status']>) {
            state.status = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(getChats.fulfilled, (state, action) => {
            state.list = action.payload!;
            state.status = "success";
        });
        builder.addCase(addChat.fulfilled, (state, { payload }) => {
            state.list = [...state.list, {
                ...payload
            }];
        })
    },
})

export default chats.reducer;

export const changeChatsStatus = chats.actions.changeChatsStatus;