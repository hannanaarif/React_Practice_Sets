/*
 Create a React component that calls the video library api when the page is loaded completely
and display all the videos on the screen. And on click of delete button, delete the first video in
the list.

*/

import { useEffect, useState } from "react";
import "./VideoGrid.css";

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/videos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: [
              {
                title: "The Power of Habit",
                thumbnail: "https://picsum.photos/200/130",
                views: 1000000,
                likes: 50000,
              },
              {
                title: "How to Code in JavaScript",
                thumbnail: "https://picsum.photos/200/135",
                views: 500000,
                likes: 25000,
              },
              {
                title: "10 Minute Yoga for Beginners",
                thumbnail: "https://picsum.photos/200/131",
                views: 250000,
                likes: 15000,
              },
              {
                title: "Introduction to Machine Learning",
                thumbnail: "https://picsum.photos/200/132",
                views: 100000,
                likes: 10000,
              },
              {
                title: "The Science of Cooking",
                thumbnail: "https://picsum.photos/200/133",
                views: 75000,
                likes: 5000,
              },
              {
                title: "The Art of Public Speaking",
                thumbnail: "https://picsum.photos/200/134",
                views: 50000,
                likes: 2500,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Videos not found.",
        });
      }
    }, 2000);
  });
};

function Video() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fakeFetch("https://example.com/api/videos").then((response) => {
      console.log(response.data.videos);
      setVideo(response.data.videos);
    });
  }, []);

  function handleDelete() {
    const confirmDelete = window.confirm(
      "The video will be permanently deleted. Are you sure?"
    );

    if (confirmDelete) {
      setVideo((prevVideos) => prevVideos.filter((_, index) => index !== 0));
    }
  }

  return (
    <div className="video-container">
      <button onClick={handleDelete} className="delete-btn">
        Delete Video
      </button>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-meta">
                Views: {video.views.toLocaleString()}
              </p>
              <p className="video-meta">
                Likes: {video.likes.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
