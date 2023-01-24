import { Todo } from "./todosSlice"

const localLoad = <T>(key: string, value: T): T => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
  return value
}

export const localTodos = localLoad('todos', [] as Todo[])
export const localFilter = localLoad<string>('filter', 'all')

