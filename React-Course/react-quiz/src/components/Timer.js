import { useEffect } from "react";

function Timer() {
  useEffect(function () {
    setInterval(function () {}, 1000);
  }, []);

  return <div className="timer"></div>;
}

export default Timer;
