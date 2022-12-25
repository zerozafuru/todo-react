import sortAll from "../utills/sortAll";
import sortTodo from "../utills/sortTodo";
import sortDone from "../utills/sortDone";

const Buttons = (props) => {
  const { todos, setTodos, filter, setFilter, sort, setSort } = props;

  return (
    <div className="btns">
      <input type='button' onClick={() => sortAll(setFilter, setSort,todos)} value='all' />
      <input type='button' onClick={() => sortTodo(setFilter, setSort,todos)} value='todo' />
      <input type='button' onClick={() => sortDone(setFilter, setSort,todos)} value='done' />
    </div>
  )
}
export default Buttons;