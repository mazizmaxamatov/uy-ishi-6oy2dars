import React from "react";

function Greeting({ name = "Guest" }) {
  return <h1 className="text-2xl font-bold">Hello, {name}!</h1>;
}

export default Greeting;