import React from 'react'


//using props, pass down the map function and send back the html needed
function Todo(props) {
  return (
        <li className={props.generateClass} onClick={props.handleClick}>{props.todo.task}</li>
  )
}

export default Todo