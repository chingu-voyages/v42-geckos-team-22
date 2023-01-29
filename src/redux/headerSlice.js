import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMenu: (state) => {},
  },
  //   initialState: [],
  //   reducers: {
  //     addTodo: (state, action) => {
  //       const todo = {
  //         id: nanoid(),
  //         title: action.payload.title,
  //         completed: false,
  //       };
  //       state.push(todo);
  //     },
  //     toggleComplete: (state, action) => {
  //       const index = state.findIndex((todo) => todo.id === action.payload.id);
  //       state[index].completed = action.payload.completed;
  //     },
  //     deleteTodo: (state, action) => {
  //       return state.filter((todo) => todo.id !== action.payload.id);
  //     },
  //   },
  //   extraReducers: {
  //     [getTodosAsync.fulfilled]: (state, action) => {
  //       return action.payload.todos;
  //     },
  //     [addTodoAsync.fulfilled]: (state, action) => {
  //       state.push(action.payload.todo);
  //     },
  //     [toggleCompleteAsync.fulfilled]: (state, action) => {
  //       const index = state.findIndex(
  //         (todo) => todo.id === action.payload.todo.id
  //       );
  //       state[index].completed = action.payload.todo.completed;
  //     },
  //     [deleteTodoAsync.fulfilled]: (state, action) => {
  //       return state.filter((todo) => todo.id !== action.payload.id);
  //     },
  //   },
});

export const { toggleMenu } = headerSlice.actions;

export default headerSlice.reducer;
