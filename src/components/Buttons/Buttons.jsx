import { useDispatch, useSelector } from "react-redux";
import { deleteDoneTodo, setFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filters";
import styles from "./Buttons.module.css"

const Buttons = (props) => {
  const dispatch = useDispatch()
  const length = useSelector((state) => state.todos.todos.length)
  const filtTodos = useSelector(filteredTodos)
  const filter = useSelector((state) => state.todos.filter)
  if (length) {
    return (
      <div
        className={styles.btns}>
        <div
          className={styles.span}>
          <span
            className={styles.btn_on}>
            {filtTodos.length}
          </span>tasks
        </div>
        <div
          className={styles.filters}>
          <button
            className={filter === 'all' ? styles.btn_on : styles.btn_off}
            onClick={() => dispatch(setFilter('all'))}
          >
            all
          </button>
          <button
            className={filter === 'active' ? styles.btn_on : styles.btn_off}
            onClick={() => dispatch(setFilter('active'))}
          >
            active
          </button>
          <button
            className={filter === 'done' ? styles.btn_on : styles.btn_off}
            type='button'
            onClick={() => dispatch(setFilter('done'))}
          >
            done
          </button>
        </div>
        <div
          className={styles.delete_all}>
          <button
            className={styles.btn_clear}
            type="button"
            onClick={() =>  dispatch(deleteDoneTodo()) }
          >
            clear
          </button>
        </div>
      </div>
    )
  }
}

export default Buttons;