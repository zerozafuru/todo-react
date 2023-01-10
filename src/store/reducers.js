import { combineReducers } from 'redux'
import todos from './todos'
import filtered from './filtered'

export const rootReducer = combineReducers({
todos,
filtered
})