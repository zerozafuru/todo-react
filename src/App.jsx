import React, { useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./App.module.css"

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';



function App() {

  const localTodos = () => {
    if (localStorage.getItem('todos') == null) {
      return []
    } else {
      return JSON.parse(localStorage.getItem('todos'))
    }
  }

  const localToggleAll = () => {
    if (localStorage.getItem('toggleAll') == null) {
      return false
    } else {
      return JSON.parse(localStorage.getItem('toggleAll'))
    }
  }

  const [todos, setTodos] = useState(localTodos);
  const [filter, setFilter] = useState('all');
  const [text, setText] = useState('');
 
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [toggleAll, setToggleAll] = useState(localToggleAll)
  useEffect(() => {
    localStorage.setItem('toggleAll', JSON.stringify(toggleAll));
  }, [toggleAll]);

  const createNewTodo = (text) => {
    const todo = {
      title: text,
      completed: false,
      id: uuidv4(),
    }
    setTodos([todo, ...todos]);
  }

  const saveTask = (e, text) => {
    e.preventDefault();
    if ((text !== '') && (text !== ' ')) {
      createNewTodo(text)
      setText("");
    }
  }

  const completeAll = () => {
    const toggleAllCheck = !todos.every((todo) => todo.completed)
    let completeTodo = todos.map((item) => ({
      ...item,
      completed: toggleAllCheck
    }))
    setToggleAll(toggleAllCheck)
    setTodos(completeTodo)

  }

  const deleteTask = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo);

  }

  const renameTask = (e, todo, setEdit, title) => {
    e.preventDefault();
    if ((title !== '') && (title !== ' ')) {
      todo.title = title;
      localStorage.setItem('todos', JSON.stringify(todos))
      setEdit(false)
    }
  }

  const completeTask = (todo) => {

    todo.completed = !todo.completed
    localStorage.setItem('todos', JSON.stringify(todos))
    setToggle(!toggle)
    const toggleAllCheck = todos.every((todo) => todo.completed)
    if (toggleAllCheck) {
      setToggleAll(true)
    } else {
      setToggleAll(false)
    }

  }

  const deleteAll = () => {
    const newTodo = todos.filter(todo => todo.completed === false)
    setTodos(newTodo);
    setToggleAll(false)

  }

  const filteredTodo = () => {
    switch (filter) {
      case 'all':
        return (todos)
      case 'active':
        return (todos.filter(todo => todo.completed === false))
      case 'done':
        return (todos.filter(todo => todo.completed === true))
      default:
        break;
    }
  }



 


  return (
    <>
      <div className={styles.container}>
        <Header className={styles.header} />
        <TodoForm
          className={styles.todoForm}
          saveTask={saveTask}
          createNewTodo={createNewTodo}
          completeAll={completeAll}
          setText={setText}
          text={text}
          toggleAll={toggleAll}
        />
        <ul className={styles.ul}>
          <TaskList
            className={styles.taskList}
            todos={filteredTodo()}
            renameTask={renameTask}
            completeTask={completeTask}
            setText={setText}
            deleteTask={deleteTask}
            
          />
        </ul>
        <Buttons
          className={styles.buttons}
          filter={filter}
          setFilter={setFilter}
          deleteAll={deleteAll}
          todos={filteredTodo()}
          realTodos={todos}
        />

      </div>
      <Footer 
        todos={filteredTodo()}
      />
    </>
  );
}

export default App;