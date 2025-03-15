import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";

let data = pizzaData;

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}

function Pizza(data) {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="img" />
      <h2>Pizza Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
//React.render(<App />, document.getElementById("root"));
