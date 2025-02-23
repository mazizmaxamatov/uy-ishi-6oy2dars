import React from "react";

const Box = ({ width, height, color }) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "8px",
  };

  return <div style={style}>Custom Box</div>;
};

export default Box;