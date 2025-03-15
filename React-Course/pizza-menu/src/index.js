import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";
let data = pizzaData;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textDecoration: "uppercase" };
  //   return <h1 style={style}>Fast React Pizza Co.</h1>;

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open");
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
