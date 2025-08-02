import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    data: any;
}

const initialState: StateType = {
    data: null
}

const selectedMessage = createSlice({
    initialState,
    name: "selectedMessage",
    reducers: {
        changeSelectedMessage: (state, action) => {
            state.data = action.payload;
        }
    }
})

export default selectedMessage.reducer;
export const { changeSelectedMessage } = selectedMessage.actions;