import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    data: any;
}

const initialState: StateType = {
    data: null
}

const messageSelectedForReply = createSlice({
    initialState,
    name: "selectedMessage",
    reducers: {
        changeMessageSelectedForReply: (state, action) => {
            state.data = action.payload;
        }
    }
})

export default messageSelectedForReply.reducer;
export const { changeMessageSelectedForReply } = messageSelectedForReply.actions;