import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleComplitedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.complited = !toggleTodo.complited;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
})

export const { removeTodo } = todoListSlice.actions;
export const { toggleComplitedTodo } = todoListSlice.actions;
export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
