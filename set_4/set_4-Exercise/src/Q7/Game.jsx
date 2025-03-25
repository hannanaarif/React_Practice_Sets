import { useState } from "react";

function Game() {
  const [count, setCount] = useState(3);

  return (
    <>
      <h1>Current Life :{count}</h1>
      <button
        style={{
          width: "150px",
          height: "50px",
          borderRadius: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
        }}
        onClick={() => setCount(count - 1)}
      >
        Loose a Life
      </button>
      <h1>{count === 0 ? "Game Over" : ""}</h1>
    </>
  );
}

export default Game;
