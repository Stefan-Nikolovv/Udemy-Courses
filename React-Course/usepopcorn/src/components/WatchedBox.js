import { useState } from "react";
import WatchList from "./WatchList";
import WatchedSummary from "./WatchedSummary";

export default function WatchedBox({ average, tempWatchedData }) {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary average={average} watched={watched} />
          <WatchList watched={watched} />
        </>
      )}
    </div>
  );
}
