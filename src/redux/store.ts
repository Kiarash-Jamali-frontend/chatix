import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/user";
import chatsReducer from "./slices/chats";
import selectedMessageReducer from "./slices/selectedMessage";
import messageSelectedForReplyReducer from "./slices/messageSelectedForReply";
import currentPlayingMediaReducer from "./slices/currentPlayingMedia";
import openedImageReducer from "./slices/openedImage";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chats: chatsReducer,
        selectedMessage: selectedMessageReducer,
        currentPlayingMedia: currentPlayingMediaReducer,
        messageSelectedForReply: messageSelectedForReplyReducer,
        openedImage: openedImageReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch