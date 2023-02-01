import { createSlice } from "@reduxjs/toolkit";
import gameData from '../../data'

const initialState = {
  gameType: "Nothing Yet",
  answers:["test1", "test2", "test3"],
  currentQuestionImage:"",
  correctAnswer:"",
  currentQuestion:0,
  score:0,
  gameState:"play"
}

export const gameFunctionSlice = createSlice({
  name: "GameFunction",
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.gameType = action.payload;
      //console.log("in Slice", state.gameType)
    },
    assignAnswers: (state, action) => {
      state.answers = action.payload
    },
    assignQuestionImage: (state, action) => {
      state.currentQuestionImage = action.payload
    },
    assignCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload
    },
    assignCurrentQuestion: (state) => {
      state.currentQuestion++
      console.log(state.currentQuestion)
    },
    assignGameState: (state, action) => {
      state.gameState = action.payload
    }
  },
});

export const { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, assignCurrentQuestion, assignGameState } = gameFunctionSlice.actions;

export default gameFunctionSlice.reducer;
