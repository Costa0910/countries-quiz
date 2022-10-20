import "./options.css";
const Options = ({ options, letter, right, disable, witchIcon }) => {
  const { option, setNext, setIsTrue, optionsToDisplay } = options;

  function handleOption(event) {
    const selectedOption = event.currentTarget;
    const selectedOptionId = option.id;
    const rightOptionId = optionsToDisplay.rightAnswer.id;

    if (selectedOptionId === rightOptionId) {
      selectedOption.classList.add("right");
      setIsTrue((prev) => ({ ...prev, isRight: true, rightId: rightOptionId }));
    } else {
      selectedOption.classList.add("wrong");
      setIsTrue((prev) => ({
        ...prev,
        rightId: rightOptionId,
        wrongId: selectedOptionId,
      }));
    }
    // show next button this whatever user is right or not
    setNext(true);
  }

  let icon;
  if (witchIcon === "right") {
    icon = <span className="material-symbols-outlined">check_circle</span>;
  } else if (witchIcon === "wrong") {
    icon = <span className="material-symbols-outlined">cancel</span>;
  }

  return (
    <button
      className={right ? "option right" : "option"}
      onClick={handleOption}
      disabled={disable}
    >
      <div className="country">
        <p>{letter}</p>
        <p>{option.name}</p>
      </div>
      <div className="icon">{icon}</div>
    </button>
  );
};

export default Options;
