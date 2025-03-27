function FinishScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "👏";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "😳";
  return (
    <>
      <p className="result">
        You scored <span>{emoji}</span>
        <strong>{points} </strong> out of {maxPoints}({Math.ceil(percentage)})
      </p>
      <p className="hightscore">(Highscore: X points)</p>
    </>
  );
}

export default FinishScreen;
