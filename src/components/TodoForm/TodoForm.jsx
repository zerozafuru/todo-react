import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./TodoForm.module.css"

const TodoForm = (props) => {

  const [text, setText] = useState('');

  const editText = (e) => { setText(e.target.value) }

  return (
    <form
      className={styles.form}
      onSubmit={props.createNewTodo(e, text)}>
      <input
        className={props.todos.length ? styles.completeOn : styles.completeOff}
        type='checkbox'
        onChange={props.completeAll}
        checked={props.isComplete} />
      <input
        className={styles.input}
        autoFocus
        type="text"
        value={text}
        onChange={editText(e)}
        placeholder="What needs to be done?" />
    </form>
  )
}

export default TodoForm;