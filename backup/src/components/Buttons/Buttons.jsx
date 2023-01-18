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
        <ButtonStyled isActive = {filter === "all"}
          onClick={() => setFilter('all')}
        >
          all
        </ButtonStyled>
        <ButtonStyled isActive = {filter === "active"}
          onClick={() => setFilter('active')}
        >
          active
        </ButtonStyled>
        <ButtonStyled isActive = {filter === "done"}
          onClick={() => setFilter('done')}
        >
          done
        </ButtonStyled>
      </FiltersStyled>
      <DeleteAllStyled>
        <ButtonStyled clear = {true}
          onClick={() => dispatch(deleteDoneTodo())}
        >
          clear
        </ButtonStyled>
      </DeleteAllStyled>
    </ButtonsStyled>
  )

}

export default Buttons;