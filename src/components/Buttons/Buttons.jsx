import React from "react";
import styles from "./Buttons.module.css"

const Buttons = (props) => {

  const deleteAll = () => {
    const newTodo = props.todos.filter(todo => todo.completed === false)
    props.setTodos(newTodo);
  }

  const editFilter = (value) => {
    props.setFilter(value)
  }

  if (props.todos.length) {
    return (
      <div
        className={styles.btns}>
        <div
          className={styles.span}>
          <span
            className={styles.btnOn}>
            {props.todos.length}
          </span>tasks
        </div>
        <div
          className={styles.filters}>
          <button
            className={props.filter === 'all' ? styles.btnOn : styles.btnOff}
            onClick={() => editFilter('all')}
          >
            all
          </button>
          <button
            className={props.filter === 'active' ? styles.btnOn : styles.btnOff}
            onClick={() => editFilter('active')}
          >
            active
          </button>
          <button
            className={props.filter === 'done' ? styles.btnOn : styles.btnOff}
            type='button'
            onClick={() => editFilter('done')}
          >
            done
          </button>
        </div>
        <div
          className={styles.deleteAll}>
          <button
            className={styles.btnOff}
            type="button"
            onClick={() => deleteAll()}
          >
            clear
          </button>
        </div>
      </div>
    )
  }
}

export default Buttons;