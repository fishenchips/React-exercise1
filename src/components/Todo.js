import React from 'react'


//using props, pass down the map function and send back the html needed
//chaning from props to destructuring child components
function Todo({generateClass, handleClick, todo}) {
  return (
        <li className={generateClass} onClick={handleClick}>{todo.task}</li>
  )
}

export default Todo