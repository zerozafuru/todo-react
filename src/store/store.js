import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';

const saveLocal = (state) => {
  localStorage.setItem('todos', JSON.stringify(state.todos.todos))
  localStorage.setItem('filter', JSON.stringify(state.todos.filter))
}

const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})

store.subscribe(() => {
  saveLocal(store.getState())
})

export default store



