import React from 'react'


//using props, pass down the map function and send back the html needed
function Todo(props) {
  return (
    <article>
        <h3>{props.todo.task}</h3>
    </article>
  )
}

export default Todo