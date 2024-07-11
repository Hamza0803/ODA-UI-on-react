import React, { useState } from "react";
import Navbar from "./Components/Navbar.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import LogBar from "./Components/LogBar.jsx";
import Cards from "./Components/Cards.tsx";
import Map from "./Components/Map.tsx";
import VideoPlayer from "./Components/VideoPlayer.jsx"; // Import the VideoPlayer component
import LineChartComponent from "./Components/Chart.tsx";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoPath) => {
    setSelectedVideo(videoPath);
  };

  return (
    <div className="bg-black">
      <nav className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </nav>
      <aside className="fixed top-0 left-0 h-full z-40">
        <Sidebar />
      </aside>

      
      <aside className="ml-8 right-0 mt-12">
        <Map />
      </aside>

      <aside>
      <LogBar />
      </aside>

      <div className="fixed top-12 " style={{ marginLeft: "-28px" }}>
        <VideoPlayer selectedVideo={selectedVideo} /> 
      </div>

      <div style={{ display: "flex", marginTop: "0px", marginLeft: "22px" }}>
        <Cards onVideoClick={handleVideoClick} />
      </div>


      <div style={{ display: "flex" }}>
        <LineChartComponent />
      </div>
    </div>
  );
}
