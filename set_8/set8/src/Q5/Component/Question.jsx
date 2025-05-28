import React, { useContext } from "react";
import { forumContext } from "../Context/Forum";
import { Link } from "react-router-dom";
const Question = () => {
  const { queAns } = useContext(forumContext);

  return (
    <>
      <h2>Question</h2>
      {queAns.map((q, id) => (
        <div key={id}>
          <h3>{q.question}</h3>
          <Link>Upvote</Link>  |  
            <Link> Downvote</Link>   |
            <Link to={`/answer/${q.id}`}>Answer</Link>
        </div>
      ))}
    </>
  );
};

export default Question;
