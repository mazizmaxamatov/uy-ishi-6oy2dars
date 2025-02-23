import React from "react";

const List = ({ items }) => {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-lg text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;