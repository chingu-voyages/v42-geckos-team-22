import { createSlice } from "@reduxjs/toolkit";
import gameData from '../../data'

const initialState = {
  gameType: "Nothing Yet",
  answers:["test1", "test2", "test3"],
  gameCards:"",
  correctAnswer:"",
  score:0,
}

export const gameFunctionSlice = createSlice({
  name: "GameFunction",
  initialState,
  reducers: {
    startGame: (state, action) => {
        state.gameType = action.payload;
        console.log("in Slice", state.gameType)
    },
    assignAnswers: (state, action) => {
      state.answers = action.payload
    }
  },
});

export const { startGame } = gameFunctionSlice.actions;

export default gameFunctionSlice.reducer;
