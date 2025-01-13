import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    id: string | null;
}

const initialState: StateType = {
    id: null
};

const selectedChatOrGroup = createSlice({
    initialState,
    name: "selectedChatOrGroup",
    reducers: {
        changeSelectedChatOrGroupID: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const { changeSelectedChatOrGroupID } = selectedChatOrGroup.actions;

export default selectedChatOrGroup.reducer;