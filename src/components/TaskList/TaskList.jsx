import React from "react";
import TaskItem from "../TaskItem/TaskItem";



const TaskList = (props) => {

  return (

    props.todos.map((todo) => (
      
        <TaskItem
          key={todo.id}
          todo={todo}
          renameTask={props.renameTask}
          completeTask={props.completeTask}
          setText={props.setText}
          deleteTask={props.deleteTask}
          changeTask={props.changeTask}
        />
        )
        ))

}

        export default TaskList;