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

    toggleCompleted: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },

    toggleAllCompleted: state => {
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
      state.todos = state.todos.filter(todo => todo.completed === false)
    },

    renameTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      todo.title = action.payload.text
    },

    editFilter: (state, action) => {
      state.filter = action.payload
    }

  }
})

export const {
  createTodo,
  toggleAllCompleted,
  toggleCompleted,
  deleteTodo,
  deleteDoneTodo,
  renameTodo,
  editFilter
} = todosSlice.actions

export default todosSlice.reducer