import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';
import BottomPanel from './components/BottomPanel/BottomPanel';
import Footer from './components/Footer/Footer';

import AppStyled from './App.styles';

const App = () => {

  return (
    <>
      <AppStyled>
        <TodoForm />
        <TaskList />
        <BottomPanel />
      </AppStyled>
      <Footer />
    </>
  );
}

export default App;