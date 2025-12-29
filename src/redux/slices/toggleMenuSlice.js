import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {toggleSidebar} =toggleMenuSlice.actions

export default toggleMenuSlice.reducer
