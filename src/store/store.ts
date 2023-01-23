import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './todosSlice';

import { TodosState } from './todosSlice';

const saveLocal = (state: TodosState): void => {
  localStorage.setItem('todos', JSON.stringify(state.todos))
  localStorage.setItem('filter', JSON.stringify(state.filter))
}

const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})

store.subscribe(() => {
  saveLocal(store.getState().todos)
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


