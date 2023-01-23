import { useDispatch, useSelector } from "react-redux";
import { deleteDoneTodo, editFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filtersSelector";


import { ButtonsStyled, ButtonStyled, DeleteAllStyled, FiltersStyled, NumberStyled, TasksNumberStyled } from "./Buttons.styles";

const Buttons = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.)
  const filtTodos = useSelector(filteredTodos)
  const filter = useSelector((state) => state.todos.filter)
  const setFilter = (value: string) => {
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
        <ButtonStyled isClear={false} isActive={filter === "all"}
          onClick={() => setFilter('all')}
        >
          all
        </ButtonStyled>
        <ButtonStyled isClear={false} isActive={filter === "active"}
          onClick={() => setFilter('active')}
        >
          active
        </ButtonStyled>
        <ButtonStyled isClear={false} isActive={filter === "done"}
          onClick={() => setFilter('done')}
        >
          done
        </ButtonStyled>
      </FiltersStyled>
      <DeleteAllStyled>
        <ButtonStyled isClear={true} isActive={false}
          onClick={() => dispatch(deleteDoneTodo())}
        >
          clear
        </ButtonStyled>
      </DeleteAllStyled>
    </ButtonsStyled>
  )

}

export default Buttons;