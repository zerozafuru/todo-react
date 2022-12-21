import React, { useState } from "react";

const TaskItem = (props) => {
  const { todos, setTodos, todo } = props;
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(false);
  const [toggle, setToggle] = useState(todo.completed)


  const deleteTask = (id) => {
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo);
  }

  const renameTask = (e) => {
    e.preventDefault();
    if (text !== '') {
      todo.title = text;
      localStorage.setItem('todos', JSON.stringify(todos))
      setEdit(false)
    }
  }

  const completeTask = () => {
    todo.completed = !todo.completed
    localStorage.setItem('todos', JSON.stringify(todos))
    setToggle(!toggle)
  }

  return (
    <li>
      <form className="rename-form" onSubmit={(e) => renameTask(e)} >
        <label >
          <input type='checkbox' onChange={() => completeTask()} checked={toggle} />
          {edit ? (
            <input value={text} onChange={(e) => setText(e.target.value)} onBlur={(e) => setEdit(false)} type="text" autoFocus></input>
          ) : (
            <div onDoubleClick={(e) => setEdit(true)}>{todo.title}</div>
          )}
        </label>
        <button type="button" onClick={() => deleteTask(todo.id)}>&#10006;</button>
      </form>
    </li>
  )
}

export default TaskItem;