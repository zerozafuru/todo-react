import { useDispatch, useSelector } from "react-redux";
import { deleteDoneTodo, editFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filtersSelector";

import styles from "./Buttons.module.css"
import { ButtonsStyled, NumberStyled, TasksNumberStyled } from "./Buttons.styles";

const Buttons = (props) => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const filtTodos = useSelector(filteredTodos)
  const filter = useSelector((state) => state.todos.filter)

  const setFilter = (value) => {
    dispatch(editFilter(value))
  }

  if (!todos.length) {
    return
  }
  
  return (
    <ButtonsStyled>
      <TasksNumberStyled>
        <NumberStyled>
          {filtTodos.length}
        </NumberStyled>tasks
      </TasksNumberStyled>
      <div
        className={styles.filters}>
        <button
          className={filter === 'all' ? styles.btn_on : styles.btn_off}
          onClick={() => setFilter('all')}
        >
          all
        </button>
        <button
          className={filter === 'active' ? styles.btn_on : styles.btn_off}
          onClick={() => setFilter('active')}
        >
          active
        </button>
        <button
          className={filter === 'done' ? styles.btn_on : styles.btn_off}
          type='button'
          onClick={() => setFilter('done')}
        >
          done
        </button>
      </div>
      <div
        className={styles.delete_all}>
        <button
          className={styles.btn_clear}
          type="button"
          onClick={() => dispatch(deleteDoneTodo())}
        >
          clear
        </button>
      </div>
    </ButtonsStyled>
  )

}

export default Buttons;