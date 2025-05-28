import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { forumContext } from "../Context/Forum";

const Answer = () => {
  const { queAns } = useContext(forumContext);
  const { id } = useParams();

  const question = queAns.find((q) => q.id === Number(id));

  return (
    <div>
      {question ? (
        <>
          <h2>Question: {question.question}</h2>
          <p>Answer: {question.answer}</p>
        </>
      ) : (
        <p>Question not found.</p>
      )}{" "}
    </div>
  );
};

export default Answer;
