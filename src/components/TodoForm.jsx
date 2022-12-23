import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [text, setText] = useState('');
  const saveTask = (e) => {
    e.preventDefault();
    if (text !== '') {
      const todo = {
        id: uuidv4(),
        title: text,
        completed: false,
      }
      setText("");
      setTodos([todo, ...todos]);
    }
  }

  const deleteAll = () => {
    setTodos([])
  }
  

  return (
    <form className="create-form" onSubmit={(e) => saveTask(e)}>
      <input type='checkbox' />
      <input className="create-input" autoFocus value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="What needs to be done?" />
      <button type="button" onClick={() => deleteAll()}>&#10006;</button>
    </form>
  )
}
export default TodoForm;