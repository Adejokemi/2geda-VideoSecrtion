import React from 'react'
import MovieCard from './MovieCard';
import theater from '../assets/theater.jpg';
import { FaChevronRight, FaFileDownload, FaHeart, FaPlay } from 'react-icons/fa';
import CardList from './CardList';

const TvPreview = () => {
     const cardsSectionA = [
       {
         id: 1,
         image: theater,
         text: "Top Flight maverick...",
         paragraph: "(2023)",
         heartColor: "white",
        },
        {
            id: 2,
            image: theater,
            text: "Top Flight",
            paragraph: "(2023)",
            heartColor: "white",
        },
        {
            id: 3,
            image: theater,
            text: "Top Flight",
            paragraph: "(2023)",
            heartColor: "white",
        },
        {
            id: 4,
            image: theater,
            text: "Top Flight",
            paragraph: "(2023)",
            heartColor: "white",
        },
        {
            id: 5,
            image: theater,
            text: "Top Flight ",
            paragraph: "(2023)",
            heartColor: "white",
        },
        {
            id: 6,
            image: theater,
            text: "Top Flight",
            paragraph: "(2023)",
            heartColor: "white",
        },
     ];

  return (
    <div className="m-6 p-4 bg-white">
      <MovieCard
        imageUrl={theater}
        title="Drive in Theatre"
        releaseDate="(2023)"
        genres={["Action", "War", "Romance"]}
      />

      <button className="bg-violet-800 flex justify-center items-center gap-4 text-center py-3 w-full rounded-lg text-[15px] text-white hover:bg-violet-900">
        <FaPlay /> Play now
      </button>
      <div className="flex justify-between gap-6 items-center py-6">
        <button className="bg-gray-400 flex justify-center items-center gap-4 text-center py-2 w-full rounded-lg text-[15px] text-black hover:bg-gray-600">
          <FaHeart />
          Search
        </button>
        <button className="bg-gray-400 flex justify-center items-center gap-4 text-center py-2 w-full rounded-lg text-[15px] text-black hover:bg-gray-600">
          <FaFileDownload />
          Search
        </button>
      </div>

      <div className="flex flex-col justify-start gap-2">
        <h2 className="text-xl font-bold">About this movie</h2>
        <p className="text-gray-800">
          In the midst of World War II, a daring love story unfolds against the
          backdrop of a secret drive-in theatre operating amidst the chaos of
          battle. A brave American soldier and a resilient local woman find
          solace and love in the midst of war-torn Europe, all under the stars
          of the drive-in theatre.
        </p>
        <p className="text-gray-800">
          <span className="font-bold text-xl">Starring:</span> Chris Evans,
          Alicia Vikander, Tom Hardy, Eva Green, Sam Claflin, Daniel Bruhl
        </p>
      </div>

      <div className="py-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">People also viewed</h2>
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
  );
}

export default TvPreview
