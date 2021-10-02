import React, { useState } from "react";
import Digits from "./Component/Buttons/Digits";
import Operators from "./Component/Buttons/Operators";
import CalcFunctions from "./Component/Buttons/CalcFunctions";
import Display from "./Component/Display/Display";
import History from "./Component/History/History";

const App = () => {
  /* :: STATES --- :: */

  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const operator = ["/", "+", "*", "-", "."];

  /* :: UPDATE VALUE THAT IS BEING DISPLAYED :: */

  const updateCalculate = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toString();
    /* :: Limits Operators to display consecutively :: */
    if (
      (operator.includes(value) && calculate === "") ||
      (operator.includes(value) && operator.includes(calculate.slice(-1)))
    ) {
      return;
    }
    setCalculate(calculate + value);
  };

  /* :: Function to Delete last value that is being displaye :: */

  const deletelastValue = () => {
    if (calculate === "") {
      return;
    }

    const value = calculate.slice(0, -1);
    setCalculate(value);
  };

  /* :: CALCULATE USING EQUALS SIGN  :: */

  const calculateEquals = () => {
    /* :: Check if input is empty then set result = 0 :: */
    if (calculate === "") {
      setResult(0);
    } else {
      const calculation = eval(calculate).toString();
      /* :: Save to Calculation History :: */

      setHistory((history) => [
        ...history,
        { calculate: calculate, result: calculation },
      ]);
      setCalculate(calculation);
      setResult(calculation);
    }
  };

  /* :: RESETS THE CALCULATOR :: */

  const resetCalculator = () => {
    setCalculate("");
    setResult("");
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: 30 }}> CALCULATOR </h1>
      <div className="calculator">
        <Display calculate={calculate} result={result} />
        <Operators updateCalculate={updateCalculate} />
        <Digits
          updateCalculate={updateCalculate}
          calculateEquals={calculateEquals}
        />
        <CalcFunctions
          deletelastValue={deletelastValue}
          resetCalculator={resetCalculator}
        />
      </div>
      <History data={history} setHistory={setHistory} />
    </div>
  );
};

export default App;
