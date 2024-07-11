import React from "react";

function Cards({ onVideoClick }) {
  const posts = [
    {
        title: "WatchfulWing",
        desc: "Main ODJ 557 A model",
        // img: "/images/Sequence A.png",
        video: "/videos/VideoTraffic.mp4",
      },
      {
        title: "StealthScout 1",
        desc: "Main ODJ 557 A model",
        video: "/videos/VideoCars.mp4",
      },
      {
        title: "StealthScout 2",
        desc: "Main ODJ 557 A model",
        video: "/videos/Truckvideo.mp4",
      },
      {
        title: "SentinelEye",
        desc: "Main ODJ 557 A model",
        video: "/videos/Truckvideo.mp4",
      },
      {
        title: "StealthScout 3",
        desc: "Main ODJ 557 A model",
        video: "/videos/Truckvideo.mp4",
      },
      {
        title: "StealthScout 4",
        desc: "Main ODJ 557 A model",
        // img: "/images/Sequence D.png",
        video: "/videos/Truckvideo.mp4",
      },
  ];

  return (
    <section className="bg-gray-950 bg-opacity-220">
      <div className="mt-4 mb-2 grid gap-0.5 sm:grid-cols-1 lg:grid-cols-6 bg-gray-950 bg-opacity-220">
        {posts.map((item, key) => (
          <article className="ml-1 shadow-lg duration-300 hover:shadow-sm relative" key={key}>
            <div
              className="hover:shadow-sm hover:bg-purple-800 hover:bg-opacity-30"
              onClick={() => {
                console.log("Video clicked:", item.title); // Log the clicked video title
                onVideoClick(item.video);
              }}
            >
              <video controls width="148" height="120" className="mb-3" loop autoPlay muted>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div>
                <h3 className="text-xs text-gray-300">{item.title}</h3>
                <p className="text-gray-600 text-xs mt-0">{item.desc}</p>
              </div>
            </div>
            <div className="ml-2 absolute inset-y-0 right-0 bg-gray-800 bg-opacity-20 w-0.5 transform translate-x-1/2"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Cards;
