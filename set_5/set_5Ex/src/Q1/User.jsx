/*
Create a React component where all the users are fetched using fake fetch and listed on the
DOM. Show the online users in green color and the offline users in red color.
*/

import { useState } from "react";
import { useEffect } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users/status") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            users: [
              { name: "Raju", status: "Online" },
              { name: "Pankaj", status: "Offline" },
              { name: "Sakshi", status: "Offline" },
              { name: "Kishore", status: "Offline" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No users Found",
        });
      }
    }, 2000);
  });
};

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/users/status").then((user) =>
      setUser(user.data.users)
    );
  },[]);

  return(<>
  <ol>
  <h1>Online Users</h1>

    {user.map((use)=>(
      <ol key={use.name} style={{ color: use.status === "Online" ? "green" : "red", fontSize:"25px" }}>{use.name},{use.status}</ol>
    ))}
  </ol>
  
  </>)

}
export default User;
