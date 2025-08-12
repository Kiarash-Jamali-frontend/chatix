import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FontSizeState = {
    size: number;
    max: number;
    min: number;
}

const initialState: FontSizeState = {
    size: 16,
    min: 14,
    max: 18
}

const fontSize = createSlice({
    name: "fontSize",
    initialState,
    reducers: {
        increaseFontSize: (state) => {
            const newFontSize = state.size + 1;
            if (state.max >= newFontSize) {
                localStorage.setItem("chatix_font_size", JSON.stringify(newFontSize));
                state.size = newFontSize;
            }
        },
        decreaseFontSize: (state) => {
            const newFontSize = state.size - 1;
            if (state.min <= newFontSize) {
                localStorage.setItem("chatix_font_size", JSON.stringify(newFontSize));
                state.size = newFontSize;
            }
        },
        changeFontSize: (state, action: PayloadAction<FontSizeState['size']>) => {
            state.size = action.payload;
        }
    }
});

export default fontSize.reducer;
export const { increaseFontSize, decreaseFontSize, changeFontSize } = fontSize.actions;