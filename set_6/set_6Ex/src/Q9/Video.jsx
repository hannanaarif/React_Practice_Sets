/*Create a React component that calls the video api and display all the details of the video on the
screen. And on click of add label button, add a label property to the object and display the
details on the screen
*/

import { useEffect, useState } from "react";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/getvideo") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: {
              title: "The Power of Habit",
              thumbnail: "https://picsum.photos/250/130",
              views: 1000000,
              likes: 50000,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Video not found.",
        });
      }
    }, 2000);
  });
};

function Video(){
    const [videos,setVideo]=useState({})
    const [label,setLabel]=useState("")
    useEffect(()=>{
        fakeFetch("https://example.com/api/getvideo").then((resp)=>{
            setVideo(resp.data.videos)
        })
    },[])

    return(<>
      { 
        <ul>
            <img src={videos.thumbnail} alt="video" />
            <h2>{videos.title}</h2>
            <h3>{videos.views}</h3>
            <h3>{videos.likes}</h3>
            <h3>{label}</h3>
            <button onClick={()=>setLabel("Self Motivation")}>Add label</button>
        </ul>
      }
    </>)

}
export default Video