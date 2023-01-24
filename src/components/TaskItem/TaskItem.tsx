import { useState } from "react";
import { useAppDispatch } from "../../hook";
import {
  toggleCompleted,
  deleteTodo,
  renameTodo
} from "../../store/todosSlice";

import { ListStyled, NamePanelStyled } from "./TaskItem.styles";

interface TodoItemProps {
  todo: {
    id: string,
    completed: boolean,
    title: string
  }
}

const TaskItem: React.FC<TodoItemProps> = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState<string>(props.todo.title);

  const dispatch = useAppDispatch()

  const onTaskRename = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEdit(false);
    if (!title.trim()) {
      setTitle(props.todo.title)
      return
    }
    dispatch(renameTodo({ id: props.todo.id, text: title.trim() }))
  }

  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const editTodo = () => {
    setTitle(props.todo.title)
    setEdit(!edit)
  }

  const toggleComplete = () => {
    dispatch(toggleCompleted(props.todo.id))
  }

  const deleteTask = () => {
    dispatch(deleteTodo(props.todo.id))
  }

  return (
    <ListStyled>
      <form className="list-item"
        onSubmit={onTaskRename} >
        <div className="complete-box">
          <label >
            <input
              type='checkbox'
              onChange={toggleComplete}
              checked={props.todo.completed}
            />
          </label>
          {edit ? (
            <input className="rename-panel"
              value={title}
              onChange={editTitle}
              onBlur={editTodo}
              type="text"
              autoFocus>
            </input>
          ) : (
            <NamePanelStyled isActive={props.todo.completed}
              onDoubleClick={editTodo}>
              {props.todo.title}
            </NamePanelStyled>
          )}
        </div>
        <button className="delete-button"
          type="button"
          onClick={deleteTask}>
          &#10006;
        </button>
      </form>
    </ListStyled>
  )
}

export default TaskItem;