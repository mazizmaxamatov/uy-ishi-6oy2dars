import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-4 bg-white">
      {children}
    </div>
  );
};

export default Card;