import { createSlice } from '@reduxjs/toolkit';
import {filters} from '../constants';

const initialState = (() => {
  return {
    todos: [],
    filter: filters.SHOW_ALL,
    backgroundColor: 'white'
  };
})();

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    completeTodo(state, action) {
      let index;
      const completedTodo = state.todos.find((todo, idx) => {
        index = idx;

        return todo.id === action.payload
      });

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          { ...completedTodo, completed: true },
          ...state.todos.slice(index + 1),
        ]
      };
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setTheme(state, action) {
      state.backgroundColor = action.payload
    }
  }
});

export const { loadTodos, addTodo, setFilter, completeTodo, setTheme } = todoReducer.actions;
export default todoReducer.reducer;