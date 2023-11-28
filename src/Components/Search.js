import React from 'react'
import Library from './Library'
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import CardComponent from './Box';
import theater from '../assets/theater.jpg'

const Search = () => {
    const cardDataArray = [
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
        {
      imageUrl: theater,
      heading: "Driver in theatre",
      year: "2023",
      channel: "Uduak Tv",
      genres: ["Action", "War", "Romance"],
        },
    ];
  return (
    <div className="  mt-2 mx-5 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white">
          <div className="flex items-center p-4">
            <span className="mr-4">
              <FaArrowLeft />
            </span>
            <h2 className="text-xl font-bold">Search</h2>
          </div>
          <div className="relative mx-5">
            <input
              type="text"
              placeholder="Search for movies"
              className="pl-16 w-full bg-gray-200 py-1.5 rounded-lg mr-4"
            />
            <span className="absolute left-6 top-2.5">
              <FaSearch className="text-gray-500 text-lg" />
            </span>
          </div>
          {cardDataArray.map((cardData, index) => (
            <CardComponent key={index} {...cardData} />
          ))}
        </div>

        <div className="col-span-1">
          <Library />
        </div>
      </div>
    </div>
  );
}

export default Search
