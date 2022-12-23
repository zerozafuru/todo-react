const Buttons = (props) => {
  const { todos, setTodos, filter, setFilter } = props;

  const sortAll = () =>{
setFilter(todos)
  }

  const sortTodo = () =>{
    const filtTodo = todos.filter(todo => todo.completed === false )
    setFilter(filtTodo);
  }

  const sortDone = () =>{
    const filtTodo = todos.filter(todo => todo.completed === true )
    setFilter(filtTodo);
  }

  return (
    <div className="btns">
      <input type='button' onClick={() => sortAll()} value='all' />
      <input type='button' onClick={() => sortTodo()} value='todo' />
      <input type='button' onClick={() => sortDone()} value='done' />
    </div>
  )
}
export default Buttons;