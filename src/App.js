import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [highest, setHighest] = useState(0);
  const [second, setSecond] = useState(0);
  const [counter, setCounter] = useState(0);

  const clickHandler = (rowIndex, colIndex) => {
    let newMatrix = [...matrix];
    matrix[rowIndex][colIndex] = counter + 1;
    setCounter(counter + 1);
    setSecond(highest);
    setHighest(rowIndex + "" + colIndex);
    setMatrix(newMatrix);
  };

  return (
    <div className="App">
      {matrix.map((row, index) => (
        <div className="row" key={index}>
          {row.map((col, colIndex) => (
            <div
              key={index + colIndex}
              className={`col ${
                (index + "" + colIndex === highest ||
                  index + "" + colIndex === second) &&
                "red"
              }`}
              onClick={(e) => clickHandler(index, colIndex)}
            >
              {col !== 0 && `Box #${col}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
