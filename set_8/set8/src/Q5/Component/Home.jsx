// import { NavLink, Routes, Route } from "react-router-dom";
// import Question from "./Question";

// const Home = () => {
//   return (
//     <>
//       <h2>Welcome Aarif</h2>

//       <NavLink to="/question">Show Question</NavLink>
//       <Routes>
//         <Route path="/question" element={<Question/>}/>
//       </Routes>
//     </>
//   );
// };

// export default Home;
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Question from "./Question";

const Home = () => {
  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate("/question");
  };
  return (
    <>
      <h2>Welcome Aarif</h2>

      <button onClick={goToQuestion}>Go to Question</button>

      <Routes>
        <Route path="/question" element={<Question />} />
      </Routes>
    </>
  );
};

export default Home;
