import "./App.css";
import { useState } from "react";

function App() {
  const [selected, setselected] = useState({});
  const matrix = [
    { id: 0, text: "" },
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
    { id: 10, text: "" },
    { id: 11, text: "" },
    { id: 12, text: "" },
    { id: 13, text: "" },
    { id: 14, text: "" },
    { id: 15, text: "" },
  ];

  const handleClick = (id) => {
    const selectedId = matrix.filter((box) => box.id === id);
    console.log(id, selectedId.id);
  };
  return (
    <div className="App">
      <div className="box-container">
        {matrix.map((box) => (
          <div className="box" onClick={() => handleClick(box.id)} key={box.id}>
            {box.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
