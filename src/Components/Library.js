import React from "react";
import Avatar from "react-avatar";
import { FaCheckCircle, FaDownload, FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import theater from "../assets/theater.jpg";

const Library = () => {
  const cardsSectionB = [
    {
      id: 1,
      image: theater,
      text: "Top Flight maverick....",
      paragraph: "(2023)",
      heartColor: "purple",
    },
    { id: 2, image: theater, text: "Top Flight", paragraph: "(2023)", heartColor: "purple",},
  ];
  return (
    <div>
      <div className="bg-white py-4 mb-5">
        <h2 className="text-2xl p-4 font-bold">Your library</h2>
        <div className="relative mx-4">
          <input
            type="text"
            placeholder="Find in library"
            className="pl-8 w-full bg-gray-200 py-2 rounded-lg "
          />
          <span className="absolute left-2 top-2.5">
            <FaSearch className="text-gray-500 text-lg" />
          </span>
          <button className="absolute right-5 top-1.5 bg-violet-800 text-center py-1 px-3 rounded-lg text-sm text-white hover:bg-violet-900">
            Search
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold">History</h2>
          <div className="p-2">
            <CardList cards={cardsSectionB} />
          </div>
        </div>

        <div className="flex justify-between my-2 px-8 items-center">
          <div className=" flex gap-6 items-center">
            <span className="text-3xl font-light text-center">
              <FaDownload />
            </span>
            <div className="text-center">
              <h2 className="text-lg text-gray-800 font-semibold mb-1">
                Downloads
              </h2>
              <p className="text-gray-500 text-start text-sm mb-4">20 videos</p>
            </div>
          </div>
          <div>
            <span className="text-violet-700 text-2xl">
              <FaCheckCircle />
            </span>
          </div>
        </div>

        <div className="my-2 px-10 flex gap-6 items-center">
          <span className="text-2xl text-violet-700 font-light text-center">
            <FaHeart />
          </span>
          <h2 className="text-lg text-gray-800 font-medium mb-1">
            Liked Movies
          </h2>
        </div>
      </div>

      <div className=" bg-white py-4 px-5">
        <h2 className="text-2xl p-4 font-bold">Your channel</h2>
        <div className="flex items-center justify-center">
          <Avatar
            name="N"
            size="80"
            round
            src="/path/to/user-profile.jpg"
            alt="User Profile"
            color="#5b21b6"
          />
        </div>

        <div className="bg-[#dccfed] m-6 py-6">
          <div className="flex justify-around items-center pb-4">
            <div className="text-center text-black">
              <h2 className="text-4xl">0</h2>
              <p className="text-sm">Subscribers</p>
            </div>
            <div className="text-center text-black">
              <h2 className="text-4xl">0</h2>
              <p className="text-sm">Videos</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/" className="text-violet-700 underline">
              View more
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 p-5">
          <h3 className="text-xl">Upload a movie</h3>
          <p className="text-sm pb-4">
            Enhance your content by uploading movies now. Engage, diversify, and
            attract a wider audience for greater success
          </p>
          <button className=" bg-violet-800 text-center py-1.5 px-6 text-lg text-white hover:bg-violet-900">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
