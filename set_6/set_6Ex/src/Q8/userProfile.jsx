/*
Create a React component that calls the userProfile api and list the details of the user when the
page loads. Create a button saying Update name and on click of that button, change the name of
the user.

*/

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profiles: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "User Profile not found.",
        });
      }
    }, 2000);
  });
};

import { useEffect, useState } from "react";

function UserProfile() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    fakeFetch("https://example.com/api/profile").then((resp) => {
      setUsers([resp.data.profiles]); // Convert single object to an array
      setName(resp.data.profiles.name);
    });
  }, []);

  if (!users) return <p>Loading...</p>; // Handle loading state

  return (
    <>
      {users.map((user, index) => (
        <ul key={index}>
          <h2>Name: {name}</h2>
          <h3>age: {user.age}</h3>
          <h3>Gender: {user.gender}</h3>
          <h3>email:{user.email}</h3>
          <h3>Occupation: {user.occupation}</h3>
          <button
            onClick={() =>
              setName((prevName) =>
                prevName === user.name ? "Shayam" : user.name
              )
            }
          >
            Update Name
          </button>{" "}
        </ul>
      ))}
    </>
  );
}

export default UserProfile;
