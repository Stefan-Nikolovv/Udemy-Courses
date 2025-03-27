import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{timeRemaining}</div>;
}

export default Timer;
