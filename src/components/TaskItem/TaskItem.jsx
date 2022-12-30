import React, { useState } from "react";
import styles from "./TaskItem.module.css"

const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const onTaskRename = (e) => {
    e.preventDefault();
    setEdit(false);
    renameTask(props.todo.id, title)
  }

  const renameTask = (id, title) => {
    const foundedTask = props.todos.find(todo => todo.id === id)
    const updatedTask = { ...foundedTask, title }
    const index = props.todos.findIndex(todo => todo.id === id)
    const newTodos = [...props.todos]
    newTodos.splice(index, 1, updatedTask)
    props.setTodos(newTodos)
  }

  const completeTask = (id) => {
    const foundedTask = props.todos.find(todo => todo.id === id)
    const updatedComplete = !foundedTask.completed
    const updatedTask = { ...foundedTask, completed: updatedComplete }
    const index = props.todos.findIndex(todo => todo.id === id)
    const newTodos = [...props.todos]
    newTodos.splice(index, 1, updatedTask)
    props.setTodos(newTodos)
  }

  // const changeTask = (id, title) => {
  //   const foundedTask = props.todos.find(todo => todo.id === id)
  //   let updatedTask
  //   if (title === undefined) {
  //     const updatedComplete = !foundedTask.completed
  //     updatedTask = { ...foundedTask, completed: updatedComplete }
  //   } else {
  //     updatedTask = { ...foundedTask, title }
  //   }
  //   const index = props.todos.findIndex(todo => todo.id === id)
  //   const newTodos = [...props.todos]
  //   newTodos.splice(index, 1, updatedTask)
  //   props.setTodos(newTodos)
  // }

  const deleteTask = (id) => {
    const newTodo = props.todos.filter(todo => todo.id !== id)
    props.setTodos(newTodo);
  }

  const editTitle = (e) => { setTitle(e.target.value) }

  const edited = () => {
    const newEdit = !edit
    setEdit(newEdit)
  }

  return (
    <li
      className={styles.list}>
      <form
        className={styles.form}
        onSubmit={(e) => onTaskRename(e)} >
        <div
          className={styles.box}>
          <label >
            <input
              type='checkbox'
              onChange={() => completeTask(props.todo.id)}
              checked={props.todo.completed}
            />
          </label>
          {edit ? (
            <input
              className={styles.rename}
              value={title}
              onChange={(e) => editTitle(e)}
              onBlur={() => edited()}
              type="text"
              autoFocus>
            </input>
          ) : (
            <div
              className={styles.name}
              onDoubleClick={() => edited()}>
              {props.todo.title}
            </div>
          )}
        </div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => deleteTask(props.todo.id)}>
          &#10006;
        </button>
      </form>
    </li>
  )
}

export default TaskItem;