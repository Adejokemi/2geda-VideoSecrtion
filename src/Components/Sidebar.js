import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCartPlus,
  FaBook,
  FaSms,
  FaUser,
  FaTicketAlt,
  FaVideo,
  FaMusic,
  FaBookOpen,
  FaCheckSquare,
  FaTv,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-[#4f0da3] h-screen w-1/6 p-2 grid-container grid-area: sidebar overflow-y-auto transition-all duration-500 font-size-16">
      <div>
        {/* "Home" section */}
        <div className="flex flex-col justify-center items-start py-5 px-5">
          <h2 className="text-white text-lg font-bold flex items-center">
            <FaHome className="mr-4" />
            <span>Home</span>
          </h2>
        </div>

        <ul className="p-0 list-none lg:flex lg:flex-col lg:space-y-1">
          {[
            "Connect",
            "Commerce",
            "Business",
            "Chat",
            "Profile",
            "Tickets",
            "Live",
            "Stereo",
            "Tv",
            "Voting",
            "Education",
          ].map((text, index) => (
            <li key={index} className="py-2 px-5 text-lg hover:bg-violet-700">
              <Link to="/" className="no-underline text-[#c47efb]">
                <div className="flex items-center gap-4">
                  {getIcon(text)}
                  {text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-start pt-8 px-5 items-center">
           <span className="text-white text-lg mr-2"> <FaSignOutAlt/> </span>
            <p  className="text-sm text-white">Sign Out</p>
        </div>
      </div>
    </aside>
  );
};

const getIcon = (text) => {
  switch (text) {
    case "Connect":
      return <FaUsers />;
    case "Commerce":
      return <FaCartPlus />;
    case "Business":
      return <FaBook />;
    case "Chat":
      return <FaSms />;
    case "Profile":
      return <FaUser />;
    case "Tickets":
      return <FaTicketAlt />;
    case "Live":
      return <FaVideo />;
    case "Stereo":
      return <FaMusic />;
    case "Tv":
      return <FaTv />;
    case "Voting":
      return <FaCheckSquare />;
    case "Education":
      return <FaBookOpen />;
    default:
      return null;
  }
};

export default Sidebar;
