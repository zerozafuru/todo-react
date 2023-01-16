import { useDispatch, useSelector } from "react-redux";
import { deleteDoneTodo, editFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filtersSelector";


import { ButtonsStyled, ButtonStyled, DeleteAllStyled, FiltersStyled, NumberStyled, TasksNumberStyled } from "./Buttons.styles";

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
      <FiltersStyled>
        <ButtonStyled 
          className={filter === 'all' ? 'active' : 'disabled'}
          onClick={() => setFilter('all')}
        >
          all
        </ButtonStyled>
        <ButtonStyled
          className={filter === 'active' ? 'active' : 'disabled'}
          onClick={() => setFilter('active')}
        >
          active
        </ButtonStyled>
        <ButtonStyled
          className={filter === 'done' ? 'active' : 'disabled'}
          onClick={() => setFilter('done')}
        >
          done
        </ButtonStyled>
      </FiltersStyled>
      <DeleteAllStyled>
        <ButtonStyled
          onClick={() => dispatch(deleteDoneTodo())}
        >
          clear
        </ButtonStyled>
      </DeleteAllStyled>
    </ButtonsStyled>
  )

}

export default Buttons;