/*
Create a React component that fetches user data from an API endpoint using useEffect hook
and displays the user's name, email, and phone number on the screen using the useState hook.
Add a button which toggles the display of the user's address (street, suite, city, zipcode).



*/

import { useEffect, useState } from "react";

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 555-555-5555",
            address: {
              street: "123 Main St",
              suite: "Suite 456",
              city: "Anytown",
              zipcode: "12345",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "User not found.",
        });
      }
    }, 2000);
  });
};

function UserProfile() {
  const [userProfile, SetUserProfile] = useState(null);

  const [address, Setaddress] = useState(false);

  useEffect(() => {
    fakeFetch("https://example.com/api/user").then((resp) => {
      SetUserProfile(resp.data);
    });
  }, []);

  function handleAddress() {
    Setaddress((prev) => !prev);
  }

  return (
    <>
      {userProfile && (
        <ul>
          <h2>{userProfile.name}</h2>
          <h3>{userProfile.email}</h3>
          <h3>{userProfile.phone}</h3>
          <button onClick={handleAddress}>{address?"Hide address":"Show address"}</button>
          <h3>
            {address && userProfile?.address &&
              `${userProfile.address.street} ${userProfile.address.suite}, 
               ${userProfile.address.city}, ${userProfile.address.zipcode}`
            }
          </h3>{" "}
        </ul>
      )}
    </>
  );
}
export default UserProfile;
