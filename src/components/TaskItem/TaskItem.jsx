import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, renameTodo } from "../../store/todosSlice";

import styles from "./TaskItem.module.css"

const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const dispatch = useDispatch()

  const onTaskRename = (e) => {

    e.preventDefault();
    setEdit(false);
    if (!title.trim()) {
      setTitle(props.todo.title)
      return
    }
    dispatch(renameTodo({ id: props.todo.id, text: title.trim() }))
  }

  const editTitle = (e) => {
    setTitle(e.target.value)
  }

  const edited = () => {
    setTitle(props.todo.title)
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
              onChange={() => dispatch(completeTodo(props.todo.id))}
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
              className={props.todo.completed ? styles.name_done : styles.name_active}
              onDoubleClick={edited}>
              {props.todo.title}
            </div>
          )}
        </div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(deleteTodo(props.todo.id))}>
          &#10006;
        </button>
      </form>
    </li>
  )
}

export default TaskItem;