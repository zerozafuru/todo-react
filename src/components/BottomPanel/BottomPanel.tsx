import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteDoneTodo, editFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filtersSelector";

import {
  ButtonsStyled,
  ButtonStyled,
  DeleteAllStyled,
  FiltersStyled,
  NumberStyled,
  TasksNumberStyled
} from "./BottomPanel.styles";

const BottomPanel: React.FC = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos.todos)
  const filteredTodosLength = useAppSelector(filteredTodos).length
  const filter = useAppSelector((state) => state.todos.filter)

  const setFilter = (value: string) => {
    dispatch(editFilter(value))
  }

  const deleteDoneTask = () => {
    dispatch(deleteDoneTodo())
  }

  if (!todos.length) {
    return null
  }

  return (
    <ButtonsStyled>
      <TasksNumberStyled>
        <NumberStyled>
          {filteredTodosLength}
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
          onClick={deleteDoneTask}
        >
          clear
        </ButtonStyled>
      </DeleteAllStyled>
    </ButtonsStyled>
  )

}

export default BottomPanel;