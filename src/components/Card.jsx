import React from "react";

const Card = ({ person }) => {
  return (
    <div className="flex flex-col bg-[#2546bd] px-4 py-5 rounded">
      <p>Name: {person.name}</p>
      <p>DoB: {person.birth_year}</p>
      <p>Eye color: {person.eye_color}</p>
    </div>
  );
};

export default Card;
