//Timeline.js
import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

function VerticalTimeline({ events }) {
  const colors = ['text-blue-500', 'text-red-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];

  return (
    <div className="relative mt-5" style={{ overflowY: 'auto', height: '430px' }}>
      {events.map((event, index) => (
        <div className="flex items-start relative" key={index}>
          <div className="mr-4 mt-0">
            <FaCircle className={`text-base ${colors[index % colors.length]}`} />
          </div>
          <div className="flex flex-col mt-2 mb-2 hover:bg-blue-900 hover:bg-opacity-30 ">
            <h3 className="text-xs">{event.Time}</h3>
            <div className='text-xs'>
              <p>{event.title}</p>
              <p>{event.description}</p>
              <p className="text-gray-500">{event.xcod}</p>
              <p className="text-gray-500">{event.ycod}</p>
            </div>
          </div>
          <div className="ml-auto">
            <img src={event.image} alt="Img" className="w-22 h-20 mt-2 mr-3 border" />
          </div>
          {index !== events.length - 1 && (
            <div className="absolute top-4 left-2 bottom-0 w-0.5 bg-gray-700 bg-opacity-200" />
          )}
          {index !== events.length - 1 && (
            <div className="absolute left-2 top-24 w-36 h-0.5 bg-gray-900 bg-opacity-200" />
          )}
        </div>
      ))}
    </div>
  );
}

VerticalTimeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      Time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      xcod: PropTypes.string.isRequired,
      ycod: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      displayTime: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default VerticalTimeline;
