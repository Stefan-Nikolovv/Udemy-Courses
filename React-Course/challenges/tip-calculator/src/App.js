import { useState } from "react";

export default function App() {
  const [billInput, setBillInput] = useState(0);
  const [selectedTip1, setSelectedTip1] = useState(0);
  const [selectedTip2, setSelectedTip2] = useState(0);

  const tip = (billInput * (selectedTip1 + selectedTip2)) / 2 / 100;

  function handleBillInput(bill) {
    setBillInput(bill);
  }

  function handleReset() {
    setBillInput(0);
    setSelectedTip1(0);
    setSelectedTip2(0);
  }

  return (
    <div className="App">
      <Bill bill={billInput} onInput={handleBillInput} />
      <Service selectedTip={selectedTip1} onChange={setSelectedTip1}>
        How did you like the service ?
      </Service>
      <Service selectedTip={selectedTip2} onChange={setSelectedTip2}>
        How did your friend like the service ?
      </Service>
      <Output bill={billInput} tip={tip} />
      {billInput > 0 && (
        <>
          <Reset reset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onInput }) {
  return (
    <div>
      <label>How much was the bull ?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onInput(Number(e.target.value))}
      />
    </div>
  );
}

function Service({ children, selectedTip, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={selectedTip}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      You pay {bill + tip}(${bill} + ${tip})
    </div>
  );
}

function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
