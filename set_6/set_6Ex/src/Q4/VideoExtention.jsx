import { useEffect, useState } from "react";
import "./VideoGrid.css";
import { fakeFetch } from "./Video";

function VideoExten() {
  const [videos, setVideo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fakeFetch("https://example.com/api/videos").then((response) => {
      setVideo(response.data.videos);
    });
  }, []);

  function handleDelete() {
    setShowModal(true); // Show popup when clicking delete
  }

  function confirmDelete() {
    setVideo((prevVideos) => prevVideos.filter((_, index) => index !== 0));
    setShowModal(false); // Close modal after deleting
  }

  function cancelDelete() {
    setShowModal(false); // Close modal without deleting
  }

  return (
    <div>
\      <button onClick={handleDelete} className="delete-btn">Delete Video</button>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-meta">Views: {video.views.toLocaleString()}</p>
              <p className="video-meta">Likes: {video.likes.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Popup Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>The video will be permanently deleted. Are you sure?</p>
            <button onClick={confirmDelete} className="ok-btn">OK</button>
            <button onClick={cancelDelete} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoExten;
