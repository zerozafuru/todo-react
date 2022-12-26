import React, { useState } from "react";


const TodoForm = (props) => {
  const { todos, setTodos, filter, setFilter, toggleAll, setToggleAll } = props;
  const [text, setText] = useState('');

  const saveTask = (e) => {
    e.preventDefault();
    if (!text) { return };
    props.createNewTodo(text)
    setText("");
  }

  const deleteAll = () => {
    const newTodo = todos.filter(todo => todo.completed !== true)
    setTodos(newTodo);
    setFilter(newTodo);
  }

  const completeAll = () => {
    const toggleAllCheck = !todos.every((todo) => todo.completed)

    let completeTodo = todos.map((item) => ({
      ...item,
      completed: toggleAllCheck
    }))
    setToggleAll(toggleAllCheck)
    setTodos(completeTodo)
    setFilter(completeTodo)

  }


  return (
    <form className="create-form" onSubmit={(e) => saveTask(e)}>
      <input type='checkbox' onChange={() => completeAll()} checked={toggleAll} />
      <input className="create-input" autoFocus value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="What needs to be done?" />
      <button type="button" onClick={() => deleteAll()}>&#10006;</button>
    </form>
  )
}
export default TodoForm;