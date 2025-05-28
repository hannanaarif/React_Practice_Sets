import React, { useContext } from 'react'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Email App</h1>
      <nav>
        <Link to="/inbox">Inbox</Link><br/>
        <Link to="/sent">Sent</Link>
      </nav>
    </div>
  );
};

export default Landing;
