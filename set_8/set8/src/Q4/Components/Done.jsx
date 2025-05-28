import React, { useContext, useEffect } from "react";
import { TodoContext } from "../Context/Todocontext";
import { Link, NavLink } from "react-router";

const Done = () => {
  const { todos } = useContext(TodoContext);
  
    const donetodos = todos.filter((todo) => todo.isCompleted)



  return (
    <div>
      <h2>Done</h2>
      {donetodos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>Status: {todo.isCompleted ? "Done" : "Not Done"}</p>
          <NavLink>Expand Todo</NavLink>
          </div>
      ))}
    </div>
  );
};

export default Done;
