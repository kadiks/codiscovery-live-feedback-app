import { useState } from "react";
import "./App.css";

import Day from "./Day";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="container">
      <h1 className="App-title">Codiscovery Feedback</h1>
      <Day day={"Mercredi"} date={10} />
      <Day day="Jeudi" date={11} />
      <Day day="Vendredi" date={11} />
      <h3>Counter</h3>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
