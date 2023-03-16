import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openNav: false,
};
const utilsSlice = createSlice({
  name: "utils",

  initialState,
  reducers: {
    toggleNav: (state) => {
      state.openNav = !state.openNav;
    },
  },
});

export const utilsReducer = utilsSlice.reducer;
export const { toggleNav } = utilsSlice.actions;
