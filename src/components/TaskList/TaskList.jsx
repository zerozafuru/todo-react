import { useSelector } from "react-redux";
import TaskItem from "../TaskItem";
import { filteredTodos } from "../../store/filtersSelector";
import styles from "./TaskList.module.css"

const TaskList = (props) => {

  const todos = useSelector(filteredTodos)

  return (
    <ul 
    className={styles.ul}>
    {todos.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
      />
    ))}
    </ul>
  )
}

export default TaskList;