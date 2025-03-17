/*

Create a React component that fetches users data from an API endpoint using useEffect hook
and display users data (name, image, likes, comments) as a list on the screen using
the useState hook.
a. Show “Loading…” until your data displays on the DOM.
b. Handle errors by showing an error message on the DOM, in case of any error.

*/

import { useState } from "react";
import { useEffect } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Saroj",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 500,
              comments: 10,
            },
            {
              name: "Meeta",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 200,
              comments: 1,
            },
            {
              name: "Alia",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 100,
              comments: 5,
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users data not found.",
        });
      }
    }, 2000);
  });
};

function UserData() {
  const [userProfile, setUserprofile] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch("https://example.com/api/users")
      .then((user) => {
        setUserprofile(user.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <p style={{ color: "blue", fontSize: "38px", fontWeight: "bold" }}>
          {" "}
          Loading...
        </p>
      )}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Error: {error.message}
        </p>
      )}
      {!loading &&
        !error &&
        userProfile.map((user) => (
          <ol key={user.name}>
            <img
              src={user.image}
              alt="profile"
              style={{ height: 350, width: 250 }}
            />
            <h1>Name: {user.name}</h1>
            <h3>Likes: {user.likes}</h3>
            <h3>Comments: {user.comments}</h3>
          </ol>
        ))}
    </>
  );
}
export default UserData;
