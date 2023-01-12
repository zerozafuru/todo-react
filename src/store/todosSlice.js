import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { localFilter } from "./localStorageData";
import { localTodos } from "./localStorageData";

const initialState = () => ({
  filter: localFilter,
  todos: localTodos,
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    createTodo: (state, action) => {
      state.todos.unshift(
        {
          id: uuidv4(),
          completed: false,
          title: action.payload,
        }
      )
    },

    completeTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? {
          ...todo,
          completed: !todo.completed
        } :
          todo)
    },

    completeAllTodo: state => {
      const isComplete = state.todos.every((todo) => todo.completed)
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: !isComplete
      }))
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    deleteDoneTodo: state => {
      state.todos = (state.todos).filter(todo => todo.completed === false)
      console.log(state.todos)
    },

    renameTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? {
          ...todo,
          title: action.payload.text
        } :
          todo)
    },

    setFilter: (state, action) => {
      state.filter = action.payload
    }

  }
})

export const {
  createTodo,
  completeAllTodo,
  completeTodo,
  deleteTodo,
  deleteDoneTodo,
  renameTodo,
  setFilter
} = todosSlice.actions

export default todosSlice.reducer