import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteDoneTodo, editFilter } from "../../store/todosSlice";
import { filteredTodos } from "../../store/filtersSelector";
import { BottomPanelStyled, FilterButtonStyled } from "./BottomPanel.styles";


const BottomPanel: React.FC = () => {
  const dispatch = useAppDispatch()
  const todosLength = useAppSelector((state) => state.todos.todos).length
  const filteredTodosLength = useAppSelector(filteredTodos).length
  const filter = useAppSelector((state) => state.todos.filter)

  const setFilter = (value: string) => {
    dispatch(editFilter(value))
  }

  const deleteDoneTask = () => {
    dispatch(deleteDoneTodo())
  }

  if (!todosLength) {
    return null
  }

  return (
    <BottomPanelStyled >
      <div className="tasks-number">
        <span className="number">
          {filteredTodosLength}
        </span>tasks
      </div>
      <div className="filters">
        <FilterButtonStyled isActive={filter === "all"}
          onClick={() => setFilter('all')}
        >
          all
        </FilterButtonStyled>
        <FilterButtonStyled isActive={filter === "active"}
          onClick={() => setFilter('active')}
        >
          active
        </FilterButtonStyled>
        <FilterButtonStyled isActive={filter === "done"}
          onClick={() => setFilter('done')}
        >
          done
        </FilterButtonStyled>
      </div>
      <div className="delete-done">
        <FilterButtonStyled isClear={true}
          onClick={deleteDoneTask}
        >
          clear
        </FilterButtonStyled>
      </div>
    </BottomPanelStyled>
  )

}

export default BottomPanel;