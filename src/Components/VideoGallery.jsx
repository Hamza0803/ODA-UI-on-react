import React, { useState } from 'react';
import videosData from './../Videos.json';

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoPath) => {
    setSelectedVideo(videoPath);
  };

  return (
    <section className="bg-gray-950 bg-opacity-220">
              {/* <VideoPlayer selectedVideo={selectedVideo} /> Render the VideoPlayer component */}

      <div className="mt-2 mb-2 grid gap-0.5 sm:grid-cols-1 lg:grid-cols-9 bg-gray-950 bg-opacity-220">
        {videosData.map((video, index) => (
          <div className="hover:shadow-sm hover:bg-purple-800 hover:bg-opacity-30" key={index} onClick={() => handleVideoClick(video.videoPath)}>
            <video controls width="148" height="120" className="mb-3" loop autoPlay muted>
              <source src={video.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="text-xs text-gray-300">
              {video.title}
            </h3>
            <p className="text-gray-600 text-xs mt-0">
              {video.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoGallery;
