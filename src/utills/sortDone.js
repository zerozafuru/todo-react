const sortDone = (setFilter, setSort,todos) => {
    const filtTodo = todos.filter(todo => todo.completed === true)
    setFilter(filtTodo);
    setSort('done')
  }

  export default sortDone