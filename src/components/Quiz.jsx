import "./quiz.css";
import adventure from "../images/undraw_adventure_4hum 1.svg";
import { useState } from "react";
import DisplayQuiz from "./DisplayQuiz";

const Quiz = ({ quiz, setQuiz, optionsToDisplay }) => {
  const [next, setNext] = useState(false);
  const [isTrue, setIsTrue] = useState({
    isRight: false,
    rightId: "",
    wrongId: "",
  });

  function handleNext() {
    if (isTrue.isRight) {
      setQuiz((prev) => ({
        ...prev,
        currentSequence: prev.currentSequence + 1,
      }));

      //  reset
      setIsTrue({
        isRight: false,
        rightId: "",
        wrongId: "",
      });
    } else {
      setQuiz((prev) => ({
        ...prev,
        witchToDisplay: !prev.witchToDisplay,
        isRightAnswer: false,
      }));
    }

    setNext(false);
  }

  return (
    <div className="quiz">
      <div className="img">
        <img src={adventure} />
      </div>
      {quiz.witchToDisplay ? (
        <DisplayQuiz
          question={`${optionsToDisplay.rightAnswer.capital} is the capital of`}
          options={{ setIsTrue, setNext, optionsToDisplay, isTrue }}
        />
      ) : (
        <>
          <div className="flag">
            <img src={optionsToDisplay.rightAnswer.flag} />
          </div>
          <DisplayQuiz
            question="Witch country does this flag belong to?"
            options={{ setIsTrue, setNext, optionsToDisplay, isTrue }}
          />
        </>
      )}
      {next && (
        <div className="next" onClick={handleNext}>
          <button>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
