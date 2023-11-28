// Carousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.image}
            alt={`slide ${index + 1}`}
            className="w-full"
          />
          <div className="absolute bottom-0 w-full text-white p-4">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
