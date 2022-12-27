import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';



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
  const [edit, setEdit] = useState(false);
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

  const renameTask = (e, todo) => {
    e.preventDefault();
    if ((text !== '') && (text !== ' ')) {
      todo.title = text;
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
    <div className="container">
      <Header />
      <TodoForm
        saveTask={saveTask}
        createNewTodo={createNewTodo}
        completeAll={completeAll}
        setText={setText}
        text={text}
        toggleAll={toggleAll}

      />
      <TaskList
        todos={filteredTodo()}
        renameTask={renameTask}
        completeTask={completeTask}
        setText={setText}
        edit={edit}
        setEdit={setEdit}
        deleteTask={deleteTask}

      />
      <Buttons
        setFilter={setFilter}
        deleteAll={deleteAll}
        todos={filteredTodo()}

      />
      <Footer />
    </div>
  );
}

export default App;