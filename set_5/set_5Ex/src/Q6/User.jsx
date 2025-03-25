/*

Create a React component called Comments.
a. Fetch the comments using thefake fetch and list the data on DOM.
b. Each comment component will have the text, user’s name and a delete button.
c. On click of the delete button, that particular comment object should be deleted and should not
be visible on the DOM.


*/

import { useEffect } from "react";
import { useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            comments: [
              {
                name: "Raju",
                text: "Hello how are you long time no see!!!",
              },
              { name: "Pankaj", text: "Party when??" },
              { name: "Sakshi", text: "Where are you currently staying" },
              { name: "Kishore", text: "Hello Buddy!!" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No comments Found",
        });
      }
    }, 2000);
  });
};

function User() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/comments")
      .then((user) => setUserDetails(user.data.comments))
      .catch(() => {
        setUserDetails([]); // Ensure state remains an array even on failure
      });
  }, []);

  function handleClick(index) {
    setUserDetails((prevComments) =>
      prevComments.filter((_, i) => i !== index)
    );
  }

  return (
    <>
      <h2>Comments</h2>
      <ul>
        {userDetails.map((chat, index) => (
          <li key={index}>
            <h3>{chat.name}</h3>
            <p>{chat.text}</p>
            <button onClick={() => handleClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default User;
