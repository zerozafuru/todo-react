import React, { useState, useEffect } from "react";


import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import useLocal from "./utills/useLocal";

function App() {
  const [todos, setTodos] = useState(useLocal);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const [filter, setFilter] = useState(todos)
 
    return (
    <div className="container">
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      <Buttons todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      <Footer />
    </div>
  );
}

export default App;