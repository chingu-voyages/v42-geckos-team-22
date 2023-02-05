import { createSlice } from "@reduxjs/toolkit";
import gameData from '../../data'

const initialState = {
  gameType: "Nothing Yet",
  answers: ["test1", "test2", "test3"],
  currentQuestionImage: "",
  correctAnswer: "",
  currentQuestion: 0,
  score: 0,
  success: "hidden",
  failure: true,
  gameState: "play"
}

export const gameFunctionSlice = createSlice({
  name: "GameFunction",
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.gameType = action.payload;
     // console.log("in Slice startGame", state.gameType)
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
    advanceCurrentQuestion: (state) => {
      state.currentQuestion++
    //  console.log("inSlice advanceCurrentQuestions", state.currentQuestion)
    },
    resetCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload
     // console.log("in resetCurrentQuestion", state.currentQuestion)
    },
    assignGameState: (state, action) => {
      state.gameState = action.payload
    //  console.log("inslice assignGameState'", state.gameState)
    },
    calculateScore: (state, action) => {
      state.score = action.payload
    //  console.log("in slice calculateScore", state.score)
    },
    toggleConfetti: (state, action) => {
      state.success = action.payload
      console.log(state.success)
    },
  },
});

export const { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, advanceCurrentQuestion, assignGameState, resetCurrentQuestion, calculateScore, toggleConfetti } = gameFunctionSlice.actions;

export default gameFunctionSlice.reducer;