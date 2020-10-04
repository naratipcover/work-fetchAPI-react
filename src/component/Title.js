import React from "react";
import Poke from "./Poke";

function Title({ children }) {
  return (
    <>
      <h1 className="title-container">{children}</h1>
      <Poke></Poke>
    </>
  );
}

export default Title;
