import React from "react";

const Modal = ({ title, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 hover:bg-gray-400">No</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Yes</button>
      </div>
    </div>
  );
};

export default Modal;