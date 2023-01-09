import TaskItem from "../TaskItem";

const TaskList = (props) => {

  return (
    props.filteredTodos.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
        deleteTask={props.deleteTask}
        renameTask={props.renameTask}
        completeTask={props.completeTask}
      />
    ))
  )
}

export default TaskList;