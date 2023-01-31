import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});
