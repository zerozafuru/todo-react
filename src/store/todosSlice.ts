import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { localFilter } from "./localStorageData";
import { localTodos } from "./localStorageData";

export type Todo = {
  id: string;
  completed: boolean;
  title: string;
}

export type TodosState = {
  todos: Todo[],
  filter: string
}

const initialState: TodosState = {
  todos: localTodos,
  filter: localFilter,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    createTodo: (state, action: PayloadAction<string>) => {
      state.todos.unshift(
        {
          id: uuidv4(),
          completed: false,
          title: action.payload,
        }
      )
    },

    toggleCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (!todo) {
        return
      }
      todo.completed = !todo.completed
    },

    toggleAllCompleted: state => {
      const isComplete = state.todos.every((todo) => todo.completed)
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: !isComplete
      }))
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },

    deleteDoneTodo: state => {
      state.todos = state.todos.filter(todo => !todo.completed) // do something 
    },

    renameTodo: (state, action: PayloadAction<{
      id: string;
      text: string;
    }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.title = action.payload.text
      }
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