import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const dateTime = new Date();
  dateTime.setDate(dateTime.getDate() + count);
  function handleDecStep() {
    if (step > 0) setStep((s) => s - 1);
  }
  function handleIncrStep() {
    setStep((s) => s + 1);
  }

  function handleDecDate() {
    if (step > 0) setCount((s) => s - step);
  }
  function handleIncrDate() {
    setCount((s) => s + step);
  }

  return (
    <div>
      <button onClick={handleDecStep}>Decrease</button>
      <p>Step: {step}</p>
      <button onClick={handleIncrStep}>Increase</button>
      <div>
        <button onClick={handleDecDate}>Decrease Date</button>
        <p>Counter: {count}</p>
        <button onClick={handleIncrDate}>Increase Date</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was.`}
      </span>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}
