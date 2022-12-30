import React, { useState, useEffect, useMemo } from "react";
import styles from "./App.module.css"

import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';

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

  //  eslint-disable-next-line
  const filteredTodos = useMemo(() => filteredTodo(), [filter, todos])

  const confirmTask = (text) => {
    const todo = {
      completed: false,
      id: uuidv4(),
      title: text,
    }
    props.setTodos([todo, ...props.todos]);
  }

  const createNewTodo = (e, text) => {
    e.preventDefault();
    if (text.trim) {
      confirmTask(text)
    }
    setText('');
  }

  const isComplete = todos.every((todo) => todo.completed)

  const completeAll = () => {
    const completeTodo = todos.map((item) => ({
      ...item,
      completed: !isComplete
    }))
    props.setTodos(completeTodo)
  }


  return (
    <>
      <div
        className={styles.container}>
        <Header
          className={styles.header} />
        <TodoForm
          className={styles.todoForm}
          createNewTodo={createNewTodo}
          completeAll={completeAll}
          isComplete={isComplete}
        />
        <ul
          className={styles.ul}>
          <TaskList
            className={styles.taskList}
            filtTodos={filteredTodos}
            setTodos={setTodos}
            todos={todos}
          />
        </ul>
        <Buttons
          className={styles.buttons}
          filter={filter}
          setFilter={setFilter}
          filtTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <Footer
        filtTodos={filteredTodos}
      />
    </>
  );
}

export default App;