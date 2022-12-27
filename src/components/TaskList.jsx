import React from "react";
import TaskItem from "./TaskItem";


const TaskList = (props) => {

  return (
    props.todos.map((todo) => (
      <TaskItem
        key={todo.id}
        todo={todo}
        renameTask={props.renameTask}
        completeTask={props.completeTask}
        setText={props.setText}
        edit={props.edit}
        setEdit={props.setEdit}
        deleteTask={props.deleteTask}
      />
    )
    ))

}

export default TaskList;