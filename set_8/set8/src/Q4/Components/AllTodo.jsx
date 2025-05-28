import React, { useContext } from "react";
import { TodoContext } from "../Context/Todocontext";

const AllTodo = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h2>ALL todos</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <h2
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.title}
          </h2>{" "}
          <p>{todo.description}</p>
          <p>Status: {todo.isCompleted ? "Done" : "Not Done"}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTodo;
