import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  const mins = Math.floor(timeRemaining / 60);

  const secounds = timeRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secounds < 10 && "0"}
      {secounds}
    </div>
  );
}

export default Timer;
