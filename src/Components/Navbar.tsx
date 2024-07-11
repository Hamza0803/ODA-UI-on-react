// import React, { useState } from "react";
import React from "react";
const Navbar = () => {
    // const [nav, setNav] = useState(false);

    // const toggleNav = () => {
    //     setNav(!nav);
    // };

    return (
        <div className="flex justify-between items-center w-full h-12 px-4 text-white bg-gray-950 bg-opacity-100 fixed nav" >
            <div className="navbar-icon">        
                <img src='/images/icons.png' alt="icons"  className="text-white text-3xl mb-2 ml-6 cursor-pointer h-30 w-140 hover:text-gray-500 mt-3 mx-48" />
            </div>
              
            {/* Dropdown */}
            <div className="relative ml-60 ">
                <select name="cars" id="cars" className="bg-black   py-1 px-1 ml-8 rounded text-white" style={{ border: '0.5px solid gray' }}>
                  <option value="volvo">Yolo Fast Object Detection</option>
                  <option value="saab">Histogram Oriented Gradients </option>
                  <option value="opel">Faster R-CNN</option>
                  <option value="audi">Single Shot Detector (SSD)</option>
                </select>
                {/* <button onClick={toggleNav} className="text-gray text-sm border ">Yolo fast Object Detection</button>
                {nav && (
                    <div className="absolute mt-2 w-48 bg-black-800 bg-opacity-9 rounded-lg shadow-lg z-10">
                        <div className="p-2">
                            <p className="text-white">Histogram Oriented Gradients (HOG) </p>
                            <p className="text-white">Faster R-CNN.</p>
                            <p className="text-white">Single Shot Detector (SSD) </p>
                        </div>
                    </div>
                )} */}
            </div>

            <div className="navbar-icon">        
                <img src='/images/G1-core2.png' alt='icon' className="text-white text-3xl mb-2 ml-3 mr-1 cursor-pointer h-30 w-36 hover:text-gray-500 mt-3" />
            </div>
        </div>
    );
};

export default Navbar;
