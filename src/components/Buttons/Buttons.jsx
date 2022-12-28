import React from "react";
import styles from "./Buttons.module.css"


const Buttons = (props) => {

  if (props.realTodos.length > 0) {

    return (

      <div className={styles.btns}>
        <span className={styles.span}>
          {props.todos.length} tasks left
        </span>
        <div className={styles.filters}>
          <button
            className={props.filter==='all' ? styles.btnOn : styles.btnOff}
            onClick={() => {
              props.setFilter('all')
            }}>all</button>
          <button
            className={props.filter==='active' ? styles.btnOn : styles.btnOff}
            onClick={() => {
              props.setFilter('active')
            }}>active</button>
          <button
            className={props.filter==='done' ? styles.btnOn : styles.btnOff}
            type='button' onClick={() => {
              props.setFilter('done')
            }}>done</button>
        </div>
        <div className={styles.deleteAll}>
          <button className={styles.btnOff}

            type="button"
            onClick={() => props.deleteAll()}
          >
            clear completed
          </button>
        </div>
      </div>
    )
  }
}

export default Buttons;