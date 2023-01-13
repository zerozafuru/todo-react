import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';
import Buttons from './components/Buttons/Buttons';
import Footer from './components/Footer/Footer';

import AppStyled from './App.styles';

const App = () => {

  return (
    <>
      <AppStyled>
        <TodoForm />
        <TaskList />
        <Buttons />
      </AppStyled>
      <Footer />
    </>
  );
}

export default App;