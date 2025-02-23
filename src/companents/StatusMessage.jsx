import React from "react";

const StatusMessage = ({ isSuccess }) => {
  return (
    <div
      className={`p-4 text-lg font-bold rounded-md ${
        isSuccess ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
      }`}
    >
      {isSuccess ? "Success!" : "Error!"}
    </div>
  );
};

export default StatusMessage;