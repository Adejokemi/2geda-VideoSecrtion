import React from "react";
import {
  FaArrowLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import Carousel from "./Carousel";
import theater from "../assets/theater.jpg";
import Fifa from "../assets/Fifa.jpg";
import JagunJagun from "../assets/JagunJagun.jpg";
import CardList from "./CardList";
import MovieCard from "./MovieCard";
import Library from "./Library";

const Dashboard = () => {
 const slides = [
   {
     title: "Driver in the theatre",
     description: "Action (2022)",
     image: theater,
   },
   {
     title: "Driver in the theatre",
     description: "Action (2022)",
     image: theater,
   },
   {
     title: "Driver in the theatre",
     description: "Action (2022)",
     image: theater,
   },
   {
     title: "Driver in the theatre",
     description: "Action (2022)",
     image: theater,
   },
   {
     title: "Driver in the theatre",
     description: "Action (2022)",
     image: theater,
   },
 ];

  const cardsSectionA = [
    {
      id: 1,
      image: theater,
      text: "Top Flight maverick...",
      paragraph: "(2023)",
      heartColor: "purple",
    },
    {
      id: 2,
      image: theater,
      text: "Top Flight maverick...",
      paragraph: "(2023)",
      heartColor: "purple",
    },
    {
      id: 3,
      image: theater,
      text: "Top Flight maverick...",
      paragraph: "(2023)",
      heartColor: "purple",
    },
  ];

  
  return (
    <div className="bg-gray-200  mt-2 mx-5 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white container px-5">
          <div className="flex items-center py-4">
            <span className="mr-4">
              <FaArrowLeft />
            </span>
            <h2 className="text-2xl font-bold">TV</h2>
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
          <div className="py-4">
            <Carousel slides={slides} />
          </div>
          <img src={Fifa} alt="Fifa World Cup" className="p-4" />

          <MovieCard
            imageUrl={JagunJagun}
            title="NEW MOVIE PREMIERE"
            releaseDate=". SEP 24 2023"
            genres={["Action", "War", "Romance"]}
          />

          <div className="py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Top Movies</h2>
              <div className="flex justify-between items-center">
                <p className="text-lg  text-violet-700">More</p>
                <span className="text-violet-700">
                  <FaChevronRight />
                </span>
              </div>
            </div>
            <CardList cards={cardsSectionA} />
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">New release</h2>
              <div className="flex justify-between items-center">
                <p className="text-lg  text-violet-700">More</p>
                <span className="text-violet-700">
                  <FaChevronRight />
                </span>
              </div>
            </div>
            <CardList cards={cardsSectionA} />
          </div>
          <div className="py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kids and Family</h2>
              <div className="flex justify-between items-center">
                <p className="text-lg  text-violet-700">More</p>
                <span className="text-violet-700">
                  <FaChevronRight />
                </span>
              </div>
            </div>
            <CardList cards={cardsSectionA} />
          </div>
        </div>

        <div className="col-span-1">
          <Library/>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
