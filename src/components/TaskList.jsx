import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { todos, setTodos, filter, setFilter,sort, setSort } = props;

  return (
    filter.map((todo) => (
      <TaskItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
    ))
  )
}

export default TaskList;