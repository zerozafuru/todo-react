import React, { useState } from "react";


const TaskItem = (props) => {
  const { todos, setTodos, todo } = props;
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(false);

  const deleteTask = (id) => {
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo);
  }

  const renameTask = (e) => {
    e.preventDefault();
    todo.title = text;
    setEdit(false)
  }
console.log(edit)
  return (
    <li>
      {todo.title}
      <form onSubmit={(e) => renameTask(e)} onDoubleClick={() => setEdit(true)}>
        
          {edit ? (
            <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
          ) : (
            <div>{todo.title}</div>
          )}
        
        <button onClick={() => deleteTask(todo.id)}>&#10006;</button>
      </form>
    </li>
  )
}

export default TaskItem;