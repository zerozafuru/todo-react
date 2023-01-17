import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";
import { filteredTodos } from "../../store/filtersSelector";

import { UlStyled } from "./TaskList.styles";

const TaskList = (props) => {

  const todos = useSelector(filteredTodos)

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