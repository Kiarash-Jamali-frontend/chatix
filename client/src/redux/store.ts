import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/user";
import chatsReducer from "./slices/chats";
import selectedMessageReducer from "./slices/selectedMessage";
import messageSelectedForReplyReducer from "./slices/messageSelectedForReply";
import currentPlayingMediaReducer from "./slices/currentPlayingMedia";
import openedImageReducer from "./slices/openedImage";
import selectedChatOrGroupReducer from "./slices/selectedChatOrGroup"
import groupsReducer from "./slices/groups";
import openedProfileReducer from "./slices/openedProfile";
import themeReducer from "./slices/theme";
import draftsReducer from "./slices/drafts";
import fontSizeReducer from "./slices/fontSize";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chats: chatsReducer,
        selectedMessage: selectedMessageReducer,
        currentPlayingMedia: currentPlayingMediaReducer,
        messageSelectedForReply: messageSelectedForReplyReducer,
        openedImage: openedImageReducer,
        selectedChatOrGroup: selectedChatOrGroupReducer,
        groups: groupsReducer,
        openedProfile: openedProfileReducer,
        theme: themeReducer,
        drafts: draftsReducer,
        fontSize: fontSizeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch