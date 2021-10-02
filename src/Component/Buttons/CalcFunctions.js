import React from "react";

const CalcFunctions = ({ resetCalculator, deletelastValue }) => {
  return (
    <>
      <div className="calc operators">
        <button className="reset" onClick={resetCalculator}>
          C
        </button>
        <button className="delete" onClick={deletelastValue}>
          DEL
        </button>
      </div>
    </>
  );
};

export default CalcFunctions;
