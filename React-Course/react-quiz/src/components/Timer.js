import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, timeRemaining } = useQuiz();
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
