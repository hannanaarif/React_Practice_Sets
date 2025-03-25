/*
Create a React component that calls the socialMedia profile api and when the page is loaded
show details of the user and a button follow along with the name of the user on the button. On
click of that increase the followers count by one and disable the button.
*/

import { useEffect, useState } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profile: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer",
              followers: 450,
              followedBy: 400,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Profile not found.",
        });
      }
    }, 2000);
  });
};

function SocialMedia() {
  const [Details, setDetails] = useState(null);
  //   const [follow, setFollow] = useState(null);
  const [isFollow, setIsFollow] = useState(false);
  useEffect(() => {
    fakeFetch("https://example.com/api/profile").then((resp) => {
      setDetails(resp.data.profile);
    });
  }, []);

  //   function handleFollow() {
  //     isFollow==false && setDetails((prev) => ({
  //       ...prev,
  //       followers: prev.followers + 1
  //     }));
  //     isFollow==true && setDetails((prev) => ({
  //         ...prev,
  //         followers: prev.followers - 1
  //       }));
  //     setIsFollow((prev) => !prev); // ✅ Toggle Button State

  //   }

  function handleFollow() {
    setDetails((prev) => ({
      ...prev,
      followers: isFollow ? prev.followers - 1 : prev.followers + 1, // ✅ Fix: Toggle correctly
    }));
    setIsFollow((prev) => !prev); // ✅ Toggle Follow state
  }

  return (
    <>
      {Details && (
        <ul>
          <h1>Name: {Details.name}</h1>
          <h2>Age: {Details.age}</h2>
          <h2>Gender: {Details.gender}</h2>
          <h2>Email: {Details.email}</h2>
          <h2>Occupation: {Details.occupation}</h2>
          <h2>Followers: {Details.followers}</h2>
          <h2>Followed By:{Details.followedBy}</h2>
          <button onClick={handleFollow}>
            {isFollow ? "Following" : `Follow ${Details.name}`}
          </button>
        </ul>
      )}
    </>
  );
}
export default SocialMedia;
