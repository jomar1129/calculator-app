import React from "react";
import "./Button.css";

const Operators = ({ updateCalculate }) => {
  return (
    <>
      <div className="operators">
        <button value="/" onClick={(e) => updateCalculate(e)}>
          /
        </button>
        <button value="*" onClick={(e) => updateCalculate(e)}>
          *
        </button>
        <button value="+" onClick={(e) => updateCalculate(e)}>
          +
        </button>
        <button value="-" onClick={(e) => updateCalculate(e)}>
          -
        </button>
        <button value="(" onClick={(e) => updateCalculate(e)}>
          (
        </button>
        <button value=")" onClick={(e) => updateCalculate(e)}>
          )
        </button>
      </div>
    </>
  );
};

export default Operators;
