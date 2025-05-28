import React, { useContext } from 'react'
import { TodoContext } from '../Context/Todocontext'
import { Link, NavLink } from 'react-router';

const Open = () => {
    const {todos,setTodo}=useContext(TodoContext);
    const openTodos=todos.filter((todo)=>!todo.isCompleted)
    function markAsDone(id) {
        setTodo((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: true } : todo
          )
        );
      }
  return (
    <div>
      <h2>Open</h2>
      {openTodos.map((todo,index) => (
        <div key={index}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p>Status: {todo.isCompleted ? "Done" : "Not Done"}</p>
        <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
        {/* <NavLink>Expand Todo</NavLink> */}
      </div>
      ))}
    </div>
  )
}

export default Open
