import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import gameFunctionSlice from "./slices/gameFunctionSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    gameFunction: gameFunctionSlice,
  },
});
