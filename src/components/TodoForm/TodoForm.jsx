import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, toggleAllCompleted } from "../../store/todosSlice"

import styles from "./TodoForm.module.css"

const TodoForm = (props) => {
  const dispatch = useDispatch()

  const [text, setText] = useState('');

  const saveNewTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return
    }
    dispatch(createTodo(text))
    setText('');
  }

  const todos = useSelector((state) => state.todos.todos)
  const isComplete = todos.every((todo) => todo.completed)

  const editText = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1 className={styles.header}>todos</h1>
      <form
        className={styles.form}
        onSubmit={saveNewTodo}>
        <input
          className={todos.length ? styles.complete_on : styles.complete_off}
          type='checkbox'
          onChange={() => dispatch(toggleAllCompleted())}
          checked={isComplete} />
        <input
          className={styles.input}
          autoFocus
          type="text"
          value={text}
          onChange={editText}
          placeholder="What needs to be done?" />
      </form>
    </>
  )
}

export default TodoForm;