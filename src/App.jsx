import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import localTodos from "./utills/localTodos";
import localToggleAll from "./utills/localToggleAll";

function App() {
  
  const [todos, setTodos] = useState(localTodos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState(todos)

  const [sort, setSort] = useState('all')

  const [toggleAll, setToggleAll] = useState(localToggleAll)
  useEffect(() => {
    localStorage.setItem('toggleAll', JSON.stringify(toggleAll));
  }, [toggleAll]);

  const createNewTodo = (text) => {
    const todo = {
      id: uuidv4(),
      title: text,
      completed: false,
    }

    setTodos([todo, ...todos]);
    setFilter([todo, ...todos])
  }

  return (
    <div className="container">
      <Header />
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        toggleAll={toggleAll}
        setToggleAll={setToggleAll}

        createNewTodo={createNewTodo}
      />

      <TaskList
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        toggleAll={toggleAll}
        setToggleAll={setToggleAll} />
      <Buttons todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort} />
      <Footer />
    </div>
  );
}

export default App;