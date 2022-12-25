const sortTodo = (setFilter, setSort,todos) => {
    const filtTodo = todos.filter(todo => todo.completed === false)
    setFilter(filtTodo);
    setSort('todo')
  }

  export default sortTodo