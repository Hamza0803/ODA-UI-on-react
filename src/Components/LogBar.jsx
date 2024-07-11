import React, { useState, useEffect } from 'react';
import VerticalTimeline from './Timeline';
import events from './Events.json';

function LogBar() {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;
  
    const displayNextEvent = () => {
      if (currentIndex < events.length) {
        const nextEventDisplayTime = events[currentIndex].displayTime;
        setVisibleEvents(events.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(displayNextEvent, nextEventDisplayTime);
      }
    };
  
    // Start displaying events
    displayNextEvent();
  
    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);
  
  



    return (
        <aside className="fixed top-10 right-0 h-full bg-gray-950 bg-opacity-300 text-white" style={{ width: '26rem' }}>
            <div className="p-4 mt-5">
                <div className="flex items-center mb-1">
                    <img src="./images/Group.png" alt="Group Icon" className="mr-2 mt-1"  />
                    <p className="text-xs">SentinelEye</p>
                    <img src="./images/LogBar/Frame 1909.png" alt="Image1" className="mx-1 ml-24" />
                    <img src="./images/LogBar/Line 224.png" alt="Image2" className="mx-1" />
                    <img src="./images/LogBar/Frame 1911.png" alt="Image3" className="" />
                    <img src="./images/LogBar/Line 225.png" alt="Image4" className="mx-1" />
                    <img src="./images/LogBar/Frame 1913.png" alt="Image5" className="mx-0" />
                    <img src="./images/LogBar/dock.png" alt="Image6" className="mx-5" />
                </div>
                <div className="ml-6 mb-7">
                    <img src = './images/Main ODJ.png' alt= 'icons'/>
                </div>
                <div className="flex items-center  mb-3 mt-4 relative">
                 <img src="./images/LogBar/GraphVector.png"  alt="Description " className="mr-1 " />
                 <div className="absolute top-1/2 transform -translate-y-1/2">
                 <img src="./images/LogBar/Rectangle 1487.png" alt="Description of Rectangle 1487" className="m-0 ml-20" /> 
                 <img src="./images/LogBar/Rectangle 1488.png" alt="Description of Rectangle 1488" className="ml-40" /> 
                 <img src="./images/LogBar/Rectangle 1485.png" alt="Description of Rectangle 1485" className="ml-44" /> 
                 <img src="./images/LogBar/Rectangle 1484.png" alt="Description of Rectangle 1484" className="ml-48" /> 
                 <img src="./images/LogBar/Rectangle 1484.png" alt="Description of Rectangle 1484" className="ml-72" /> 
                 <img src="./images/LogBar/Rectangle 1484.png" alt="Description of Rectangle 1484" className="ml-80" /> 
                 <img src="./images/LogBar/Rectangle 1486.png" alt="Description of Rectangle 1486" className="mx-2 mb-3" /> 
                 <img src="./images/LogBar/Rectangle 1487.png" alt="Description of Rectangle 1487" className="m-0 ml-60" /> 
                 <img src="./images/LogBar/Rectangle 1487.png" alt="Description of Rectangle 1487" className="m-0 ml-6" /> 
                 <img src="./images/LogBar/Rectangle 1487.png" alt="Description of Rectangle 1487" className="m-0 mt- ml-96" /> 


                 </div>
               </div>
                <div>
                {/* <img src="./images/LogBar/Timeline/Line 213.png" className="mx-2 mb-1" />  */}
                {visibleEvents.length > 0 && <VerticalTimeline events={visibleEvents} />}

                </div>

            </div>
        </aside>
    );
}

export default LogBar;
