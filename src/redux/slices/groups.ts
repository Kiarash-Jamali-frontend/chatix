import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { and, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import Group from "../../types/Group";
import GroupMember from "../../types/GroupMember";

export type SidebarGroupData = Group;

type GroupState = {
    list: SidebarGroupData[],
    status: "loading" | "success" | "userUnauthenticated"
}

const initialState: GroupState = {
    list: [],
    status: "loading"
};

export const getGroups = createAsyncThunk("groups/getGroups", async (userEmail: string) => {
    let groupsList: SidebarGroupData[] = [];
    const q = query(
        collection(db, "group_member"),
        and(
            where("memberEmail", "==", userEmail),
            where("removedFromGroup", "==", false)
        ),
    );
    return getDocs(q).then(async (querySnapshot) => {
        for (let i = 0; i < querySnapshot.size; i++) {
            const groupMemberData = querySnapshot.docs[i].data() as GroupMember;
            const groupDocRef = doc(db, "group", groupMemberData.groupId);
            const groupData = (await getDoc(groupDocRef)).data() as SidebarGroupData;
            groupsList = [...groupsList, { ...groupData, id: querySnapshot.docs[i].data().groupId }]
        }
    }).then(() => {
        return groupsList;
    });
})

const groups = createSlice({
    name: "groups",
    initialState,
    reducers: {
        changeGroupsStatus(state, action: PayloadAction<GroupState['status']>) {
            state.status = action.payload;
        },
        addGroup(state, action: PayloadAction<SidebarGroupData>) {
            state.list = [...state.list, action.payload];
        },
        removeGroup(state, action: PayloadAction<string>) {
            state.list = [...state.list.filter(g => g.id != action.payload)];
        }
    },
    extraReducers(builder) {
        builder.addCase(getGroups.fulfilled, (state, action) => {
            state.list = action.payload!;
            state.status = "success";
        })
    },
})

export default groups.reducer;

export const { changeGroupsStatus, addGroup, removeGroup } = groups.actions;