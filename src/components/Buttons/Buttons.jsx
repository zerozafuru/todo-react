import styles from "./Buttons.module.css"

const Buttons = (props) => {

  if (props.length) {
    return (
      <div
        className={styles.btns}>
        <div
          className={styles.span}>
          <span
            className={styles.btn_on}>
            {props.length}
          </span>tasks
        </div>
        <div
          className={styles.filters}>
          <button
            className={props.filter === 'all' ? styles.btn_on : styles.btn_off}
            onClick={() => props.editFilter('all')}
          >
            all
          </button>
          <button
            className={props.filter === 'active' ? styles.btn_on : styles.btn_off}
            onClick={() => props.editFilter('active')}
          >
            active
          </button>
          <button
            className={props.filter === 'done' ? styles.btn_on : styles.btn_off}
            type='button'
            onClick={() => props.editFilter('done')}
          >
            done
          </button>
        </div>
        <div
          className={styles.delete_all}>
          <button
            className={styles.btn_clear}
            type="button"
            onClick={props.deleteAll}
          >
            clear
          </button>
        </div>
      </div>
    )
  }
}

export default Buttons;