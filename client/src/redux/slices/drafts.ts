import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Draft = Record<string, {
    value: string,
    timestamp: number
}>;

type StateType = {
    list: Draft[];
}

const initialState: StateType = {
    list: []
}

const drafts = createSlice({
    initialState,
    name: "drafts",
    reducers: {
        addDraft: (state, action: PayloadAction<Draft>) => {
            const newList = [...state.list, action.payload];
            localStorage.setItem("chatix_drafts", JSON.stringify(newList));
            state.list = newList;
        },
        removeDraft: (state, action: PayloadAction<string>) => {
            const newList = state.list.filter((d) => Object.keys(d)[0] != action.payload);
            localStorage.setItem("chatix_drafts", JSON.stringify(newList));
            state.list = newList;
        },
        changeDraft: (state, action: PayloadAction<Draft>) => {
            const newList = [...state.list.filter((d) => Object.keys(d)[0] != Object.keys(action.payload)[0]), action.payload];
            localStorage.setItem("chatix_drafts", JSON.stringify(newList));
            state.list = newList;
        },
        setDraftsList: (state, action: PayloadAction<StateType['list']>) => {
            state.list = action.payload;
        }
    }
})

export default drafts.reducer;
export const getDraft = createSelector([(state: RootState) => state.drafts.list, (_, draftKey: string) => draftKey], (drafts, draftKey) => {
    return drafts.find((d) => Object.keys(d)[0] == draftKey);
});
export const { addDraft, changeDraft, removeDraft, setDraftsList } = drafts.actions;