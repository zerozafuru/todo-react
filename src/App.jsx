import React, { useState } from "react";

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';



function App() {
  const [todos, setTodos] = useState([]);

  

  return (
    <div className="container">
      <Header />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos}/>
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
