import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.todos.filter
const getTodos = (state) => state.todos.todos

export const filteredTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return (todos.filter(todo => !todo.completed))
      case 'done':
        return (todos.filter(todo => todo.completed))
      default:
        break;
    }
  }
)