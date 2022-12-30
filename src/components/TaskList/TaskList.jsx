import React from "react";

import TaskItem from "../TaskItem";

const TaskList = (props) => {

  return (
    props.filtTodos.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
        todos={props.todos}
        setTodos={props.setTodos}
      />
    ))
  )
}

export default TaskList;