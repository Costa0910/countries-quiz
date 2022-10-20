import "./result.css";
import winnerImg from "../images/winner.svg";

const Result = (props) => {
  const { quiz, setQuiz } = props.options;

  function resetGame() {
    setQuiz((prev) => ({ ...prev, currentSequence: 0, isRightAnswer: true }));
  }

  return (
    <div className="result">
      <img src={winnerImg} />
      <h2>Results</h2>
      <p>
        You got <span>{quiz.currentSequence}</span> correct answers
      </p>
      <button onClick={resetGame}>Try again</button>
    </div>
  );
};

export default Result;
