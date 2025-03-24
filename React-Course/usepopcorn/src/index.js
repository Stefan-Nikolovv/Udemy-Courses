import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRaiting from "./components/StarRating";

// function Test() {
//   const [movieRating, setMovieRaiting] = useState(0);

//   return (
//     <div>
//       <StarRaiting color="blue" maxRating={10} onSetRating={setMovieRaiting} />
//       <p>This movie was rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRaiting maxRating={5} />
    <Test /> */}
    <App />
  </React.StrictMode>
);
