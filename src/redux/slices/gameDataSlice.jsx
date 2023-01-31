import { createSlice } from "@reduxjs/toolkit";
import gameDate from '../../data'

const initialState = {
  gameType: "",
  answers:"",
  gameCards:"",
  correctAnswer:"",
  score:0,

}

export const gameDataSlice = createSlice({
  name: "GameData",
  initialState,
  reducers: {
    setGame: (state, action) => {
        state.gameType = action.payload;
    },
  },
});

export const { setGame } = gameDataSlice.actions;

export default gameDataSlice.reducer;
