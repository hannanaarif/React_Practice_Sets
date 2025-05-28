import { Link, Route, Routes } from "react-router-dom";
import { TodoContext } from "./Q4/Context/Todocontext";
import Done from "./Q4/Components/Done";
import Open from "./Q4/Components/Open";
import AllTodo from "./Q4/Components/AllTodo";
import Home from "./Q5/Component/Home";
import Question from "./Q5/Component/Question";
import Answer from "./Q5/Component/Answer";

// function App() {

//   return (
//     <>
//       <h2>Todos</h2>
//       <nav>
//         <Link to="/open">Open Todos</Link> | <Link to="/done">Done Todos</Link> | <Link to="/all">All Todos</Link>
//       </nav>

//       <Routes>
//         <Route path="/open" element={<Open/>} />
//         <Route path="/done" element={<Done />} />
//         <Route path="/all" element={<AllTodo/>} />
//       </Routes>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/answer/:id" element={<Answer />} />
      </Routes>
    </>
  );
}

export default App;
