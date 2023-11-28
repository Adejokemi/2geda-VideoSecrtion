// CardList.js
import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <div className="flex justify-between gap-4 items-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          text={card.text}
          paragraph={card.paragraph}
          heartColor={card.heartColor}
        />
      ))}
    </div>
  );
};

export default CardList;
