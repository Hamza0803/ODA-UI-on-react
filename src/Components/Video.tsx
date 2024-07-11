import React from 'react';

function Video({ selectedVideo }) {
  console.log('selectedVideo:', selectedVideo);

  return (
    <div className='margin-left 54 border border-gray-900 bg-opacity-30' style={{
      position: 'absolute',
      top: 46,
      right: 416,
      display: 'flex',
      borderWidth: '4px'
    }}>
      {selectedVideo && (
        <video width="578" height="410" controls preload="none" autoPlay loop muted style={{ float: "right" }}>
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Video;
