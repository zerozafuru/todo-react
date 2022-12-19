import react, { useState } from "react"

const InputForm = (props) => {
  const { todo, setTodo } = props;

  const [text, setText] = useState("");

  console.log(text);

  // const saveTask = () => {
  //   setTodo(todo.push(text))
  // }

  return (
    <form>
      <label>What to do:</label>
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="stuff" />
      <button>create</button> 
    </form>
  )
}
export default InputForm;