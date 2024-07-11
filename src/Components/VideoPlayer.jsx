import React from 'react';

function VideoPlayer({ selectedVideo }) {
  return (
    <div className="video-player ml-96 mb-0">
      {selectedVideo && (
        <video controls width="578" height="410" src={selectedVideo} alt="video" type="video/mp4" autoPlay loop muted >

        </video>
      )}
    </div>
  );
}

export default VideoPlayer;
