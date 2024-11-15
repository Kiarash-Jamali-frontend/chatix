import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    data: any;
}

const initialState: StateType = {
    data: null
}

const currentPlayingMedia = createSlice({
    initialState,
    name: "selectedMessage",
    reducers: {
        changeCurrentPlayingMedia: (state, action) => {
            state.data = action.payload;
        }
    }
})

export default currentPlayingMedia.reducer;
export const { changeCurrentPlayingMedia } = currentPlayingMedia.actions;