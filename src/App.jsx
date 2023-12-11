import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(10);

  const makeIncrement = () => {
    setValue(value + 1);
  };
  const makeDecrement = () => {
    setMinus(minus - 1);
  };
  return (
    <>
      <h2 className="text-5xl text-purple-700 font-bold text-center my-20">
        Hello Everyone
      </h2>
      <button onClick={makeIncrement} className="btn btn-ghost">
        Increase : {value}
      </button>
      <button onClick={makeDecrement} className="btn btn-ghost">
        Decrement : {minus}
      </button>
    </>
  );
}

export default App;
