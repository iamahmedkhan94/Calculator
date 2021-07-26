import React, { useState } from "react";
import "./App.css";
import ResultComponent from "./components/result-component";
import KeyPadComponent from "./components/keypad-component";
import Service from "./service/service";

const App = () => {
  const [result, setResult] = useState("");

  const onClick = (button) => {
    console.log("button", button);
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
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
};

export default App;
