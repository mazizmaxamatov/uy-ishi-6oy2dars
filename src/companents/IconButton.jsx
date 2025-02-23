import React from "react";

const IconButton = ({ icon, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {type === "submit" ? "Submit" : type === "reset" ? "Reset" : "Click"}
    </button>
  );
};

export default IconButton;