import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Q2/component/Home";
import BookProvider from "./Q2/context/Bookcontext";
import Favorites from "./Q2/component/Favorites";
import Profile from "./Q2/component/Profile";
import Read from "./Q2/component/Read";

function App() {
  return (
    <>
      <BookProvider>
        <nav>
          <NavLink to="/">Home</NavLink>  
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/read">Read</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BookProvider>
    </>
  );
}

export default App;
