import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ThemeType = {
    value: "dark" | "light" | undefined
}

const initialState: ThemeType = {
    value: undefined
}

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state, { payload }: PayloadAction<"dark" | "light">) {
            localStorage.setItem("chatix_theme", payload);
            state.value = payload;
        },
        changeToSystemDefaultTheme(state) {
            localStorage.removeItem("chatix_theme");
            state.value = undefined;
        }
    }
});

export const { changeTheme, changeToSystemDefaultTheme } = theme.actions;
export default theme.reducer;