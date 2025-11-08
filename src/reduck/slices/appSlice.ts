import { SIDEBAR_ITEMS } from "@components/Sidebar/constants";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

interface CounterState {
  activeSidebarItem: string;
}

const initialState: CounterState = {
  activeSidebarItem: SIDEBAR_ITEMS.Home.value,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveSidebarItem: (state, action) => {
      state.activeSidebarItem = action.payload;
    },
  },
});

export const { setActiveSidebarItem } = appSlice.actions;

export const selectCount = (state: RootState) => state.app.activeSidebarItem;

export default appSlice.reducer;
