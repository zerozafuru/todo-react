import React from "react";

const TodoForm = (props) => {

  return (
    <form
      className="create-form"
      onSubmit={(e) => props.saveTask(e,props.text)}>
      <input
        type='checkbox'
        onChange={() => props.completeAll(props.todos)}
        checked={props.toggleAll} />
      <input
        className="create-input"
        autoFocus
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
        type="text"
        placeholder="What needs to be done?" />
    </form>
  )
}

export default TodoForm;