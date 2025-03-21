import { useState } from "react";
import ListBoxes from "./ListBoxes";

export default function ListBox({ tempMovieData }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <ListBoxes tempMovieData={tempMovieData} />}
    </div>
  );
}
