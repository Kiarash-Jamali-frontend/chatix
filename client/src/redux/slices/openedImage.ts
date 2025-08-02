import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
    message: any
}

const initialState: StateType = {
    message: null
};

const openedImageSlice = createSlice({
    name: "opendedImage",
    initialState,
    reducers: {
        changeImage(state, action: PayloadAction<StateType>) {
            state.message = action.payload;
        },
        hideImage(state) {
            state.message = null;
        }
    }
});

export default openedImageSlice.reducer;
export const { changeImage, hideImage } = openedImageSlice.actions;