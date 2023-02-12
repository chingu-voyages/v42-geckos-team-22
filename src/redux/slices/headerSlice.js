import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = headerSlice.actions;

export default headerSlice.reducer;
