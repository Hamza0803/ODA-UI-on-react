import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const Map = () => {
  return (
    <div className="flex" style={{ width: "318px", height: "302px"  }}> 
       <div style={{ width: "100%", height: "100%"  }}> 
      <MapContainer
        center={[51.505, -0.09]}
        zoom={28}
        style={{ width: "100%", height: "100%" }}
      >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          {/* icons */}
          {/* <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                circle: true,
                rectangle: true,
                marker: false,
                polyline: false,
                circlemarker: false,
              }}
            />
          </FeatureGroup> */}
        </MapContainer>
    </div>
    </div>
  
    
  );
};

export default Map;





























// //Map.tsx
// import React from 'react';
// // import style from '../../Styles/Home.module.css'
// import 'leaflet/dist/leaflet.css'
// import { MapContainer, TileLayer } from 'react-leaflet';

// function Map() {
//     return(
//         <div style={{ position: 'relative' }}> {/* Set position relative */}
//             <img src='./images/Drone.png' alt='Drone1' className='w-30 h-32' style={{ position: 'absolute', top: 14, left: 35, zIndex: 999 }} /> 
//             <img src='./images/Drone.png' alt='Drone1'className='w-30 h-32' style={{ position: 'absolute', top: 14, left: 35, zIndex: 999 }} /> 
          
//             <img src='./images/Drone2.png' alt='Drone2' className='w-30 h-32' style={{ position: 'absolute', top: 54, left: 100, zIndex: 999 }} />
//             <img src='./images/Drone2.png' alt='Drone2' className='w-30 h-32' style={{ position: 'absolute', top: 54, left: 100, zIndex: 999 }} />


//             <img src='./images/Frame 1967.png'  alt='Frame1' style={{ position: 'absolute', top: 4, left: 200, zIndex: 999 }} /> 
//             <img src='./images/Frame 1967.png'  alt='Frame1' style={{ position: 'absolute', top: 4, left: 200, zIndex: 999 }} /> 

//             <img src='./images/Group 301.png' alt='Group' style={{ position: 'absolute', top: 250, left: 34, zIndex: 999 }} /> 
//             <img src='./images/Group 301.png' alt='Group' style={{ position: 'absolute', top: 250, left: 34, zIndex: 999 }} /> 

//             <img src='./images/Group 302.png' alt='Group' style={{ position: 'absolute', top: 250, left: 180, zIndex: 999 }} />
//             <img src='./images/Group 302.png' alt='Group' style={{ position: 'absolute', top: 250, left: 180, zIndex: 999 }} />


//             {/* Map */}
//             <div className="w-24.32% h-18.65rem mt-24 ml-0.5% border-t-2 border-r-2 border-l-2 border-b-4 border-solid border-blue-900 rounded-2">
//                  <MapContainer center={[31.582045, 74.329376]} zoom={13} scrollWheelZoom={true}>
//                     <TileLayer
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                 </MapContainer>
//             </div>

//         </div>
//     );
// }

// export default Map;
