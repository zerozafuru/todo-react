import React, { useState } from "react";
import styles from "./TaskItem.module.css"



const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title)

  return (
    <li className={styles.list}>
      <form
        className={styles.form}
        onSubmit={(e) => props.renameTask(e, props.todo, setEdit, title)} >
        <div className={styles.box}>
          <label >
            <input
              type='checkbox'
              onChange={() => props.completeTask(props.todo)}
              checked={props.todo.completed}
            />
          </label>
          {edit ? (
            <input className={styles.rename}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setEdit(false)}
              type="text"
              autoFocus>
            </input>
          ) : (
            <div 
            className={styles.name}
            onDoubleClick={() => setEdit(true)}>
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