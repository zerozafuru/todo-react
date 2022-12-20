import React, { useState } from "react"
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { todos, setTodos } = props;
  return (
    todos.map((todo) => (
      <TaskItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />

    ))

  )
}




export default TaskList;