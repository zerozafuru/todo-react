const localLoad = (key, value) => {
  const item = localStorage.getItem(key)
  return JSON.parse(item) || value
}

export const localTodos = localLoad('todos', [])
export const localFilter = localLoad('filter', 'all')

