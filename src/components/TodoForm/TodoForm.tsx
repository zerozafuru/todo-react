import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { createTodo, toggleAllCompleted } from "../../store/todosSlice"

import { CompleteBoxStyled, FormStyled, } from "./TodoForm.styles";

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const [text, setText] = useState('');

  const saveNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      return
    }
    dispatch(createTodo(text))
    setText('');
  }

  const toggleAllTasksComplete = () => {
    dispatch(toggleAllCompleted())
  }

  const todos = useAppSelector((state) => state.todos.todos)
  const isComplete = todos.every((todo: { completed: boolean }) => todo.completed)

  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1>todos</h1>
      <FormStyled
        onSubmit={saveNewTodo}>
        <CompleteBoxStyled
          isActive={Boolean(todos.length)}
          type='checkbox'
          onChange={toggleAllTasksComplete}
          checked={isComplete} />
        <input className="new-task-panel"
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