/*
Create a React component that calls the todo api and display the todos in an unordered list and
show the todos as a list. The todo should display a heading with a little description of what that todo is about.
Under that, it should display all the tasks to be done as a list.
*/

import { useState } from "react";
import { useEffect } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/todos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            todos: [
              {
                title: "Go Outside",
                desc: "lorem ipsum dolor sit amit",
                todos: ["shopping", "cricket", "walking"],
              },
              {
                title: "Let's Work",
                desc: "lorem ipsum dolor sit amit",
                todos: ["Feature update", "Team Meet", "Code Walkthrough"],
              },
              {
                title: "Home Work",
                desc: "lorem ipsum dolor sit amit",
                todos: ["Fix tap", "Wedding function"],
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todo list not found.",
        });
      }
    }, 2000);
  });
};

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeFetch("https://example.com/api/todos").then((response) => {
      setTodos(response.data.todos);
      console.log(response.data.todos);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}

      {todos.map((todo) => (
        <ul>
          <h2>{todo.title}</h2>
          <ol>
            {todo.todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
            <hr />
          </ol>
        </ul>
      ))}
    </>
  );
}

export default Todos;
