import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { todos, setTodos, filter, setFilter } = props;
  
  return (
    filter.map((todo) => (
      <TaskItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
    ))
  )
}

export default TaskList;