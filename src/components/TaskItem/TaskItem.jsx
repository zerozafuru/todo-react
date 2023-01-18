import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo, renameTodo } from "../../store/todosSlice";

import { BoxStyled, DeleteButtonStyled, FormStyled, ListStyled, NameStyled, RenameStyled } from "./TaskItem.styles";

const TaskItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const dispatch = useDispatch()

  const onTaskRename = (e) => {

    e.preventDefault();
    setEdit(false);
    if (!title.trim()) {
      setTitle(props.todo.title)
      return
    }
    dispatch(renameTodo({ id: props.todo.id, text: title.trim() }))
  }

  const editTitle = (e) => {
    setTitle(e.target.value)
  }

  const editTodo = () => {
    setTitle(props.todo.title)
    setEdit(!edit)
  }

  return (
    <ListStyled>
      <FormStyled
        onSubmit={onTaskRename} >
        <BoxStyled>
          <label >
            <input
              type='checkbox'
              onChange={() => dispatch(toggleCompleted(props.todo.id))}
              checked={props.todo.completed}
            />
          </label>
          {edit ? (
            <RenameStyled
              value={title}
              onChange={editTitle}
              onBlur={editTodo}
              type="text"
              autoFocus>
            </RenameStyled>
          ) : (
            <NameStyled isActive = {props.todo.completed}
              onDoubleClick={editTodo}>
              {props.todo.title}
            </NameStyled>
          )}
        </BoxStyled>
        <DeleteButtonStyled
          type="button"
          onClick={() => dispatch(deleteTodo(props.todo.id))}>
          &#10006;
        </DeleteButtonStyled>
      </FormStyled>
    </ListStyled>
  )
}

export default TaskItem;