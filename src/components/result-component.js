import React from "react";
/**
 *
 * @param {string} param0
 * Display result
 */
const ResultComponent = ({ result }) => {
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
};

export default ResultComponent;
