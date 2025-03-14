/*
Given an array of todoItems:

const todoItems = [
 {id: 1, task: "Writing 1-page poem", isDone: true},
 {id: 2, task: "Gym", isDone: false},
 {id: 3, task: "Shopping", isDone: false},
 {id: 4, task: "Standup call", isDone: true},
]

a. Build a React component that takes the todoItems as props and list all the todo tasks. 
b. if isDone is true then show the item with a strikethrough.
c. Add a X button against each item and remove that task from the list on click of the button.

*/

import { useState } from "react";

const todoItem = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
];

function TodoItem() {
    const [todoItems,setTodoItems]=useState(todoItem)
    
    function removeTask(id){
         setTodoItems(todoItems.filter(item=> item.id !==id))
    }

  return (<>
        {todoItems.map(item=>(
            <li key={item.id}
            style={{ textDecoration: item.isDone ? "line-through" : "none" }}>
                {item.task}{" "} <button onClick={() => removeTask(item.id)} style={{ marginLeft: "10px", color: "red" }}>
                ❌
                </button>
            </li>
        ))}
    </>
  );
}
export default TodoItem;
