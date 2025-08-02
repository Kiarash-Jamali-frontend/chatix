import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
    data: {
        profile: string | null,
        isCurrentUserProfile: boolean
    },
    hideCallback: () => unknown
}

const initialState: StateType = {
    data: {
        profile: null,
        isCurrentUserProfile: false
    },
    hideCallback: () => { }
}

const openedProfile = createSlice({
    name: "openedProfile",
    initialState,
    reducers: {
        changeOpenedProfile(state, { payload }: PayloadAction<{
            data: StateType['data'],
            hideCallback?: () => unknown
        }>) {
            state.data = payload.data;
            payload.hideCallback && (
                state.hideCallback = payload.hideCallback
            );
            return state;
        },
        removeOpenedProfile(state, { payload }: PayloadAction<{
            hideCallback?: () => unknown
        } | void>) {
            state.data = initialState.data;
            payload?.hideCallback && (
                state.hideCallback = payload.hideCallback
            );
            return state;
        },
        resetHideCallback(state) {
            state.hideCallback = () => {}
        }
    }
});

export default openedProfile.reducer;

export const { changeOpenedProfile, removeOpenedProfile, resetHideCallback } = openedProfile.actions;