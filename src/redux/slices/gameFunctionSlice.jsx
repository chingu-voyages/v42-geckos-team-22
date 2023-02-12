import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameType: "Nothing Yet",
  answers: ["test1", "test2", "test3"],
  currentQuestionImage: "",
  correctAnswer: "",
  currentQuestion: 0,
  score: 0,
  success: "hidden",
  failure: [],
  gameState: "landing"
}

export const gameFunctionSlice = createSlice({
  name: "GameFunction",
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.gameType = action.payload;
    },
    assignAnswers: (state, action) => {
      state.answers = action.payload;
    },
    assignQuestionImage: (state, action) => {
      state.currentQuestionImage = action.payload;
    },
    assignCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    advanceCurrentQuestion: (state) => {
      state.currentQuestion++;
    },
    resetCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    recordFailures: (state,action) => {
      state.failure.push(action.payload)
    },
    clearFailures: (state) => {
      state.failure = []
    },
    assignGameState: (state, action) => {
      state.gameState = action.payload;
    },
    calculateScore: (state, action) => {
      state.score = action.payload;
    },
    toggleConfetti: (state, action) => {
      state.success = action.payload;
      console.log(state.success);
    },
  },
});

export const { startGame, assignAnswers, assignQuestionImage, assignCorrectAnswer, advanceCurrentQuestion, assignGameState, resetCurrentQuestion, calculateScore, toggleConfetti, recordFailures, clearFailures } = gameFunctionSlice.actions;

export default gameFunctionSlice.reducer;
