import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const TodoForm = (props) => {
  const {todos, setTodos} = props;
  const [text, setText] = useState('');


  const saveTask = (e) => {
    e.preventDefault();
if (text!='') {
    const todo = {
      id: uuidv4(),
      title: text,
      completed: false,
    }

    setText("");

    setTodos([todo, ...todos]);
  }
  }

 


  return (
    <form onSubmit={(e) => saveTask(e)}>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="What needs to be done?" />
      
    </form>
  )
}
export default TodoForm;