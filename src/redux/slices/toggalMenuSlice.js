import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const toggalMenuSlice = createSlice({
  name: "toggalMenu",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const {toggleSidebar} =toggalMenuSlice.actions

export default toggalMenuSlice.reducer
