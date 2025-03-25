// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { use, useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(1);
  const [curr1, setCurr1] = useState("EUR");
  const [curr2, setCurr2] = useState("USD");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function currencyConvert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${curr1}&to=${curr2}`
        );

        const data = await res.json();
        setResult(data.rates[curr2]);
        setIsLoading(false);
      }
      if (curr1 === curr2) return setValue(value);
      currencyConvert();
    },
    [value, curr1, curr2]
  );

  return (
    <div>
      <input
        min={1}
        value={value}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <select value={curr1} onChange={(e) => setCurr1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={curr2} onChange={(e) => setCurr2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {!isLoading ? (
        <p>
          {result} {curr2}
        </p>
      ) : (
        <p>"Loading...."</p>
      )}
    </div>
  );
}
