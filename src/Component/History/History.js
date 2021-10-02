import React from "react";
import "../../index.css";

const History = ({ data, setHistory }) => {
  /* :: Clear All Calculation History :: */

  const clear = () => {
    setHistory([]);
  };
  return (
    <div className="calc-history">
      <h1>Calculation History</h1>
      {data.map((d) => (
        <ol>
          <li>
            {d.calculate} = {d.result}
          </li>
        </ol>
      ))}
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default History;
