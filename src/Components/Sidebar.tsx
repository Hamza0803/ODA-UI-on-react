import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed mt-12 left-0 w-8 h-full bg-gray-950 bg-opacity-100 flex flex-col"> 
      <div className="ml-1 my-6">
        <img src='/images/Home.png' alt='icon1' className=" mt-6 mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Route.png' alt='icon2' className="mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Eye.png' alt='icon3' className="mb-7 cursor-pointer hover:text-gray-500" />
        <img src='/images/Altitude.png' alt='icon4' className="mb-5 cursor-pointer hover:text-gray-500" />
      </div>
    </div>
  );
};

export default Sidebar;
