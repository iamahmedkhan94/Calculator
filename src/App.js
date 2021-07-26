/**
 * All imports
 */

import React, { useState } from "react";
import "./App.css";
import ResultComponent from "./components/result-component";
import KeyPadComponent from "./components/keypad-component";
import Service from "./service/service";

const App = () => {
  /**
   * state variable
   */
  const [result, setResult] = useState("");

  /**
   *
   * @param {string} button
   * onClick function when button pressed
   */
  const onClick = (button) => {
    if (button === "=") {
      const response = Service.calculate(result);
      setResult(response);
    } else if (button === "C") {
      const response = Service.reset();
      setResult(response);
    } else if (button === "CE") {
      const response = Service.backspace(result);
      setResult(response);
    } else {
      setResult(result + button);
    }
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Test Calculator</h1>
        <ResultComponent result={result} /> {/** result component */}
        <KeyPadComponent onClick={onClick} /> {/** keypad component */}
      </div>
    </div>
  );
};

export default App;
