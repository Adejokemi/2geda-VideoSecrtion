// CardComponent.js
import React from "react";

const CardComponent = ({ imageUrl, heading, year, channel, genres }) => {
  return (
    <div className="bg-white mt-4 p-5 flex shadow-md">
      {/* Image Div */}
      <div className="w-1/3">
        <img src={imageUrl} alt="Card" className="w-56 h-36 rounded-lg" />
      </div>

      {/* Text and Colored Divs Div */}
      <div className="w-1/3">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-2">{heading}</h2>

        {/* Paragraph */}
        <p className="text-gray-700 mb-2">{year}</p>

        {/* Span */}
        <span className="text-[#ff8a15] text-lg mb-2">{channel}</span>

        {/* Colored Divs */}
        <div className="flex pt-4">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="w-24  py-1.5 rounded-xl text-sm text-center bg-violet-700 text-white mr-2"
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
