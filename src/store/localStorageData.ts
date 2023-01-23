const localLoad = (key:string, value:string|[]) => {
  const item:string|null = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
  return  value
}

export const localTodos = localLoad('todos', [])
export const localFilter = localLoad('filter', 'all')

