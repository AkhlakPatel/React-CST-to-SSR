import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <br />
      <span>{count}</span> <br />
      <br />
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
