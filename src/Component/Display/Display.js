import React from "react";
import "./Display.css";

const Display = ({ calculate, result }) => {
  return (
    <>
      <div className="display">
        <p> {calculate}</p>
        {<p> {result || 0}</p>}
      </div>
    </>
  );
};

export default Display;
