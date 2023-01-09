import { useState } from "react";

import styles from "./TaskItem.module.css"

const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const onTaskRename = (e) => {
    e.preventDefault();
    setEdit(false);
    props.renameTask(props.todo.id, title)
  }

  const editTitle = (e) => { 
    setTitle(e.target.value) 
  }

  const edited = () => {
    setEdit(!edit)
  }

  return (
    <li
      className={styles.list}>
      <form
        className={styles.form}
        onSubmit={onTaskRename} >
        <div
          className={styles.box}>
          <label >
            <input
              type='checkbox'
              onChange={() => props.completeTask(props.todo.id)}
              checked={props.todo.completed}
            />
          </label>
          {edit ? (
            <input
              className={styles.rename}
              value={title}
              onChange={editTitle}
              onBlur={edited}
              type="text"
              autoFocus>
            </input>
          ) : (
            <div
              className={styles.name}
              onDoubleClick={edited}>
              {props.todo.title}
            </div>
          )}
        </div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => props.deleteTask(props.todo.id)}>
          &#10006;
        </button>
      </form>
    </li>
  )
}

export default TaskItem;