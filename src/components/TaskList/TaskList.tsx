import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import { filteredTodos } from "../../store/filtersSelector";

import { UlStyled } from "./TaskList.styles";

const TaskList = () => {

  const todos = useSelector(filteredTodos)

  return (
    <UlStyled>
    {todos.map((todo:{id:string}) => (
      <TaskItem
        key={todo.id}
        todo={todo}
      />
    ))}
    </UlStyled>
  )
}

export default TaskList;