import { useState } from "react";

import styles from "./TodoForm.module.css"

const TodoForm = (props) => {

  const [text, setText] = useState('');

  const saveNewTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setText('');
      return
    }
    props.confirmTask(text)
    setText('');
  }

  const editText = (e) => {
    setText(e.target.value)
  }

  return (
    <form
      className={styles.form}
      onSubmit={saveNewTodo}>
      <input
        className={props.length ? styles.complete_on : styles.complete_off}
        type='checkbox'
        onChange={props.completeAll}
        checked={props.isComplete} />
      <input
        className={styles.input}
        autoFocus
        type="text"
        value={text}
        onChange={editText}
        placeholder="What needs to be done?" />
    </form>
  )
}

export default TodoForm;