import react, { useState } from "react";

import Header from './components/Header';
import InputForm from './components/InputForm';
import TaskList from './components/TaskList';


function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Header />
      <InputForm todo={todo} setTodo={setTodo} />
      <TaskList />

    </>
  );
}

export default App;
