import React from "react";

const Digits = ({ updateCalculate, calculateEquals }) => {
  /* :: CREATE DIGITS 1 to 9 instead putting it 1 by 1 :: */
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button value={i} key={i} onClick={(e) => updateCalculate(e)}>
          {i}
        </button>
      );
    }

    return digits;
  };
  return (
    <>
      <div className="digits">
        {createDigits()}
        <button value="0" onClick={(e) => updateCalculate(e)}>
          0
        </button>
        <button value="." onClick={(e) => updateCalculate(e)}>
          .
        </button>

        <button className="equals" onClick={calculateEquals}>
          =
        </button>
      </div>
    </>
  );
};

export default Digits;
