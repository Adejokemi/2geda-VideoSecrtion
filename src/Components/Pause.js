import React from "react";
import { FaPause, FaForward, FaBackward } from "react-icons/fa";
import pause from "../assets/pause.jpg";

const PausedVideoIcon = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${pause})`,
        }}
      ></div>

      {/* Video Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center">
          {/* Backward Icon */}
          <div className="flex items-center justify-center mr-5">
            <FaBackward className="text-white text-xl"/>
            
          </div>

          {/* Pause Icon */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <FaPause className="text-black text-2xl" />
          </div>

          {/* Forward Icon */}
          <div className="flex items-center justify-center ml-5">
              <FaForward className="text-white text-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PausedVideoIcon;
