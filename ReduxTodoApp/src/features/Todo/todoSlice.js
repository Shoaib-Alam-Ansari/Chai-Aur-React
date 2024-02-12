import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
        state.todos = state.todos.map((todo) => todo.id === action.payload)
    },

    cheakTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, cheakTodo } = todoSlice.actions;

export default todoSlice.reducer;
