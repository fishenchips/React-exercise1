//rfce
import React, {useState} from 'react';
import Todo  from './Todo';

/**
 * Part 1: Generate list (See Lists and keys lecture)
 * - Create a function component here, may call it 'TodoApp'
 * - generats a list from the array below, with the array-method .map()
 * - Place the code for listItems, into a new child (function) component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * - Begin by creating a new function 'handleClick' in 'TodoApp' component
 * - The method will add a class .done, to the target element (e.target)
 * - Pass down the method as a prop, to the child component 'Todo'
 * - Make sure every listItem has the onClick eventhandler, that calls the method 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * - Make sure every other listItem has the className="odd"
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */


const todos = [
    {id: 1, task: 'Syssla 1'},
    {id: 2, task: 'Syssla 2'},
    {id: 3, task: 'Syssla 3'},
    {id: 4, task: 'Syssla 4'},
    {id: 5, task: 'Syssla 5'}
];

function TodoApp() {
    // add a function where a class "done" is added when an element is pressed
    //changed from setAttribute to classList.add() because otherwise it writes over. now it ADDS
    const handleClick = (e)=> {
        e.target.classList.add("done")
    }  
    
  return (
        <ul>
           {/*  Declare the map function in the parent and obtain the code through the child component, <Todo />
            where todo={todo} is the props sent down to child compontent
            same thing for the function handleClick 
            Also add a tenery option, where odd id's get a newly generated class*/}
            {
                todos.map( (todo) => (
                    todo.id%2 !=0 
                        ? <Todo key={todo.id} todo={todo} handleClick={handleClick} generateClass="odd"/>
                        : <Todo key={todo.id} todo={todo} handleClick={handleClick} generateClass=""/>
                ))
            }
        </ul>
  )
}

export default TodoApp