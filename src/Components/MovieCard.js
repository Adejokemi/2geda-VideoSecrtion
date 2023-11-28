
import React from 'react';

const MovieCard = ({ imageUrl, title, releaseDate, genres }) => {
  return (
    <div className="py-4 relative">
      <div className="relative z-0">
        <img
          src={imageUrl}
          alt="movie"
          className="w-full h-[70vh] rounded-lg"
        />
        <div className="absolute top-80 bottom-0 py-2 w-full px-6 bg-black opacity-80">
          <div className="flex items-center p-2 ">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            <span className="text-center p-4 text-sm text-white">
              {releaseDate}
            </span>
          </div>
          <div className="flex justify-start">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="w-24 h-2 p-4 mx-3 flex items-center text-white rounded-2xl bg-[#ff8a15]"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
