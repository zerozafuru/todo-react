import React from "react";



const TaskItem = (props) => {

  return (
    <li >
      <form
        className="rename-form"
        onSubmit={(e) => props.renameTask(e, props.todo)} >
        <label >
          <input
            type='checkbox'
            onChange={() => props.completeTask(props.todo)}
            checked={props.todo.completed}
          />
        </label>
        {props.edit ? (
          <input
            value={props.text}
            onChange={(e) => props.setText(e.target.value)}
            onBlur={() => props.setEdit(false)}
            type="text"
            autoFocus>
          </input>
        ) : (
          <div onDoubleClick={() => {console.log('xyu');props.setEdit(true)}}>
            {props.todo.title}
          </div>
        )}

        <button
          type="button"
          onClick={() => props.deleteTask(props.todo.id)}>
          &#10006;
        </button>
      </form>
    </li>
  )
}

export default TaskItem;