/*
Given an array of todoItems:
const todoItems = [
 {id: 1, task: "Writing 1-page poem", isDone: false},
 {id: 2, task: "Gym", isDone: false},
 {id: 3, task: "Shopping", isDone: false},
 {id: 4, task: "Standup call", isDone: false},
]

a. Build a React component that takes the todoItems as props and list all the todo tasks.

b. Add a "Mark as Done" button against each item and toggle isDone property value between
true and false on click of the button. If isDone is true change the color of that task to red with a
strikethrough and if it is false remove the strikethrough and the red color.




*/

import { useState } from "react";

const todoItem = [
  { id: 1, task: "Writing 1-page poem", isDone: false },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: false },
];

function TodoItem() {
  const [todoItems, setTodoItems] = useState(todoItem);

  function handleTodo(id) {
    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  return (
    <>
      {todoItems.map((item) => (
        <li
          key={item.id}
          style={{
            textDecoration: item.isDone ? "line-through" : "none",
            color: item.isDone ? "red" : "black",
          }}
        >
          {item.task}{" "}
          <button onClick={() => handleTodo(item.id)}>Mark as Done</button>
        </li>
      ))}
    </>
  );
}

export default TodoItem;
