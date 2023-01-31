import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import gameDataSlice from './slices/gameDataSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    gameData: gameDataSlice,
  },
});
