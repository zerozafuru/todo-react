import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";
import { filteredTodos } from "../../store/filters";

const TaskList = (props) => {

  const todos = useSelector(filteredTodos)



  return (
    todos.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
      />
    ))
  )
}

export default TaskList;