import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./TodoForm.module.css"

const TodoForm = (props) => {

  const [text, setText] = useState('');

  const createNewTodo = () => {
    const todo = {
      title: text,
      completed: false,
      id: uuidv4(),
    }
    props.setTodos([todo, ...props.todos]);
  }

  const saveTask = (e) => {
    e.preventDefault();
    if (text.trim) {
      createNewTodo()
      setText('');
    }
  }

  const onComplete = props.todos.every((todo) => todo.completed)

  const completeAll = () => {
    const completeTodo = props.todos.map((item) => ({
      ...item,
      completed: !onComplete
    }))
    props.setTodos(completeTodo)
  }

  return (
    <form
      className={styles.form}

      onSubmit={(e) => saveTask(e)}>
      <input
        type='checkbox'
        onChange={() => completeAll()}
        checked={onComplete} />
      <input
        className={styles.input}
        autoFocus

        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        
        placeholder="What needs to be done?" />
    </form>
  )
}

export default TodoForm;