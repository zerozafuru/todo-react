import { useAppSelector } from "../../hook";
import TaskItem from "../TaskItem/TaskItem";
import { filteredTodos } from "../../store/filtersSelector";

import { UlStyled } from "./TaskList.styles";

const TaskList: React.FC = () => {
  const todos = useAppSelector(filteredTodos)

  return (
    <UlStyled>
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </UlStyled>
  )
}

export default TaskList;