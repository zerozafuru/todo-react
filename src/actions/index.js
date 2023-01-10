import { v4 as uuidv4 } from 'uuid';

export const createTodo = text => ({
  type: 'CREATE_TODO',
  id: uuidv4(),
  text
})

export const filterSet = filter => ({
  type: 'FILTER_SET',
  filter
})

export const todoComplete = id => ({
  type: 'TODO_COMPLETE',
  id
})

export const filters = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  DONE: 'DONE'
}