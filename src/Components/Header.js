import React from "react";
import Avatar from "react-avatar";
import { FaBell, FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className="bg-white py-4 px-8 flex items-center justify-between">
      {/* Company Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-12 h-12 mr-2" />
        <h1 className="text-violet-800 text-2xl font-bold">2geda</h1>
      </div>

      <div className="flex items-center">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Name, place and jobs"
            className="px-4 w-96 border border-gray-700 py-2 rounded-lg mr-4"
          />
          <span className="absolute right-10 top-2.5">
            <FaSearch className="text-gray-500 text-xl" />
          </span>
        </div>

        {/* Notification Bell */}
        <div className="flex items-center">
          <FaBell className="text-black text-2xl mr-4 cursor-pointer" />
        </div>

        {/* User Profile Image */}
        <div className="flex items-center">
          <Avatar
            name="John Doe"
            size="40"
            round
            src="/path/to/user-profile.jpg"
            alt="User Profile"
            className="mr-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
