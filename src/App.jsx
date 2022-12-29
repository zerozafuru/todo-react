import React, { useState, useEffect, useMemo } from "react";

import styles from "./App.module.css"

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';



function App() {

  const localLoad = (key, value) => {
    const item = localStorage.getItem(key)
    if (item == null) {
      return value
    }
    return JSON.parse(item)
  }

  const localTodos = localLoad('todos', [])
  const localToggleAll = localLoad('toggleAll', false)
  const localFilter = localLoad('filter', 'all')

  // 

  const [todos, setTodos] = useState(localLoad('todos', []));
  const [filter, setFilter] = useState(localFilter);
  const [toggleAll, setToggleAll] = useState(localToggleAll)

  // 

  const UsingEffect = (key, value) => {
    useEffect(() => {
      localStorage.setItem(value, JSON.stringify(key));
    }, [key]);
  }

  UsingEffect(todos,'todos')
  UsingEffect(filter,'filter')
  UsingEffect(toggleAll,'toggleAll')

  // 

  const deleteTask = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo);

  }


  const renameTask = (title, id) => {

  }

  const completeTask = (todo) => {

    todo.completed = !todo.completed
    localStorage.setItem('todos', JSON.stringify(todos))
    // setToggle(!toggle)
    const toggleAllCheck = todos.every((todo) => todo.completed)

    if (toggleAllCheck) {
      setToggleAll(true)
    } else {
      setToggleAll(false)
    }

  }

  // 

  const deleteAll = () => {
    const newTodo = todos.filter(todo => todo.completed === false)
    setTodos(newTodo);
    setToggleAll(false)
  }



  const filteredTodo = () => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return (todos.filter(todo => !todo.completed))
      case 'done':
        return (todos.filter(todo => todo.completed))
      default:
        break;
    }
  }


  const filteredTodos = useMemo(() => filteredTodo(), [filter, todos, toggleAll])



  return (
    <>
      <div className={styles.container}>
        <Header className={styles.header} />
        <TodoForm
          className={styles.todoForm}

          todos={todos}
          setTodos={setTodos}
          
          
          
          
          
          toggleAll={toggleAll}
        />
        <ul className={styles.ul}>
          <TaskList
            className={styles.taskList}

            todos={filteredTodos}
            renameTask={renameTask}
            completeTask={completeTask}
            
            deleteTask={deleteTask}

          />
        </ul>
        <Buttons
          className={styles.buttons}

          filter={filter}
          setFilter={setFilter}
          deleteAll={deleteAll}
          todos={filteredTodos}
          realTodos={todos}
        />

      </div>
      <Footer
        todos={filteredTodos}
      />
    </>
  );
}

export default App;