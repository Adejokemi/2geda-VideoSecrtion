// Card.js
import React from "react";
import { FaHeart, FaPlay } from "react-icons/fa";

const Card = ({ image, text, paragraph, heartColor }) => {
  return (
    <div>
      <div className="relative mt-4 bg-gray-800">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Image */}
        <img src={image} alt="Card" className="w-56 h-64 object-cover" />

        {/* Play button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="text-3xl text-center bg-gray-600 focus:outline-none">
            <FaPlay />
          </button>
        </div>

        {/* Love button */}
        <div className="absolute bottom-4 left-4">
          <button
            className={`text-2xl focus:outline-none ${
              heartColor === "purple" ? "text-violet-700" : "text-white"
            }`}
          >
            <FaHeart />
          </button>
        </div>
      </div>
      <div className="text-black mt-2 font-medium">
        <h3>{text}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
