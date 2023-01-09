import { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

import styles from "./App.module.css";

const App = () => {

  const localLoad = (key, value) => {
    const item = localStorage.getItem(key)
    if (item == null) {
      return value
    }
    return JSON.parse(item)
  }

  const localTodos = localLoad('todos', [])
  const localFilter = localLoad('filter', 'all')

  const [todos, setTodos] = useState(localTodos);
  const [filter, setFilter] = useState(localFilter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [todos, filter]);

  const filteredTodos = useMemo(() => {
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
  }, [filter, todos])

  const confirmTask = (text) => {
    const todo = {
      completed: false,
      id: uuidv4(),
      title: text,
    }
    setTodos([todo, ...todos]);
  }



  const isComplete = todos.every((todo) => todo.completed)

  const completeAll = () => {
    const completeTodo = todos.map((item) => ({
      ...item,
      completed: !isComplete
    }))
    setTodos(completeTodo)
  }

  // 
  const renameTask = (id, title) => {
    if (!title.trim()) {
      return
    }
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo
      }
      return { ...todo, title }
    })
    setTodos(newTodos)
  }

  const completeTask = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo
      }
      const updatedComplete = !todo.completed
      return { ...todo, completed: updatedComplete }
    })
    setTodos(newTodos)
  }


  const deleteTask = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo);
  }

  const deleteAll = () => {
    const newTodo = todos.filter(todo => todo.completed === false)
    setTodos(newTodo);
  }

  const editFilter = (value) => {
    setFilter(value)
  }

  return (
    <>
      <div
        className={styles.container}>
        <Header
          className={styles.header} />
        <TodoForm

          confirmTask={confirmTask}
          completeAll={completeAll}
          isComplete={isComplete}
          length={todos.length}
        />
        <ul
          className={styles.ul}>
          <TaskList
            className={styles.taskList}
            filteredTodos={filteredTodos}
            deleteTask={deleteTask}
            renameTask={renameTask}
            completeTask={completeTask}
          />
        </ul>
        <Buttons
          className={styles.buttons}
          filter={filter}
          length={todos.length}
          deleteAll={deleteAll}
          editFilter={editFilter}
        />
      </div>
      <Footer
        length={filteredTodos.length}
      />
    </>
  );
}

export default App;