
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

import styles from "./App.module.css";

const App = () => {

  return (
    <>
      <div
        className={styles.container}>
        <Header
          className={styles.header} />
        <TodoForm
        />
        <ul
          className={styles.ul}>
          <TaskList
          />
        </ul>
        <Buttons
          className={styles.buttons}
        />
      </div>
      <Footer
      />
    </>
  );
}

export default App;