import { useState } from "react";
import { useEffect } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "Saroj",
            image:
              "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
            likes: 500,
            comments: 10,
          },
        });
      } else {
        reject({
          status: 404,
          message: "user data not found.",
        });
      }
    }, 2000);
  });
};

function UserProfile() {
    const [profile,setProfile]=useState({});

    useEffect(()=>{
        fakeFetch("https://example.com/api/user").then((userProfile)=>(
            setProfile(userProfile.data)
        ))
    },[])

    return(<>
    <ol>
        <img src={profile.image} alt="profile picture"/>
        <h2>Name:{profile.name}</h2>
        <h2>Comment: {profile.comments}</h2>
        <h2>Likes: {profile.likes}</h2>
    </ol>
    </>) 
}
export default UserProfile;
