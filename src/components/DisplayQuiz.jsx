import Options from "./Options";
import "./quiz.css";
const DisplayQuiz = (props) => {
  const { setNext, setIsTrue, optionsToDisplay, isTrue } = props.options;
  const allOptions = optionsToDisplay.selectedOptions.map((option, i) => {
    const letter = ["A", "B", "C", "D"];
    let witchIcon;
    // determine witch icon base in user answer
    if (isTrue.rightId === option.id) {
      witchIcon = "right";
    } else if (isTrue.wrongId === option.id) {
      witchIcon = "wrong";
    }

    return (
      <Options
        letter={letter[i]}
        options={{ option, optionsToDisplay, setIsTrue, setNext }}
        key={option.id}
        right={isTrue.rightId === option.id}
        disable={isTrue.rightId && true}
        witchIcon={witchIcon}
      />
    );
  });

  return (
    <div className="quiz-content">
      <h2>{props.question}</h2>
      <div className="options">{allOptions}</div>
    </div>
  );
};

export default DisplayQuiz;
