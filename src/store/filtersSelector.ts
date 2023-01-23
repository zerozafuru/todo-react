import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const getFilter = (state:RootState) => state.todos.filter;
const getTodos = (state:RootState) => state.todos.todos; 

export const filteredTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case 'active':
        return (todos.filter(todo => !todo.completed))
      case 'done':
        return (todos.filter(todo => todo.completed))
      default:
        return todos
    }
  }
)