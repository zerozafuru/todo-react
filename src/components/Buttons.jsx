import React from "react";


const Buttons = (props) => {
  
  

  return (
    <div className="btns">
      <span>{props.todos.length} tasks left</span>
      <input type='button' onClick={() => {
          props.setFilter('all')
      }} value='all' />
      <input type='button' onClick={() => {
        props.setFilter('active')
      }} value='active' />
      <input type='button' onClick={() => {
        props.setFilter('done')
      }} value='done' />
      <button type="button" onClick={() => props.deleteAll()}>&#10006;</button>
    </div>
  )
}

export default Buttons;