import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, toggleAllCompleted } from "../../store/todosSlice"

import { CompleteStyled, FormStyled, InputStyled } from "./TodoForm.styles";

const TodoForm = (props) => {
  const dispatch = useDispatch()

  const [text, setText] = useState('');

  const saveNewTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return
    }
    dispatch(createTodo(text))
    setText('');
  }

  const todos = useSelector((state) => state.todos.todos)
  const isComplete = todos.every((todo) => todo.completed)

  const editText = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1>todos</h1>
      <FormStyled
        onSubmit={saveNewTodo}>
        <CompleteStyled
          className={todos.length ? 'done' : 'active'}
          type='checkbox'
          onChange={() => dispatch(toggleAllCompleted())}
          checked={isComplete} />
        <InputStyled
          autoFocus
          type="text"
          value={text}
          onChange={editText}
          placeholder="What needs to be done?" />
      </FormStyled>
    </>
  )
}

export default TodoForm;