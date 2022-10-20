import { useContext, useState } from "react";
import CountriesContext from "../context/CountriesContext";
import Quiz from "./Quiz";
import Result from "./Result";
import Spinner from "./Spinner";
function chooseOptions(countries) {
  const selectedCountries = [];
  // choose four options from data
  while (selectedCountries.length < 4) {
    const index = Math.floor(Math.random() * countries.length);
    const country = countries[index];
    selectedCountries.push(country);
  }

  // Choose 1 country as right, in selected countries
  const index = Math.floor(Math.random() * selectedCountries.length);
  const option = selectedCountries[index];

  return {
    selectedOptions: selectedCountries,
    rightAnswer: option,
  };
}

const DisplayComponents = () => {
  const { countries } = useContext(CountriesContext);
  const [quiz, setQuiz] = useState({
    witchToDisplay: true,
    currentSequence: 0,
    isRightAnswer: true,
  });

  if (countries.isLoading) return <Spinner />;
  if (countries.isError)
    return <h1>Error, when trying to request data, refresh page</h1>;

  // if everything was good, choose options
  const optionsToDisplay = chooseOptions(countries.data);
  return quiz.isRightAnswer ? (
    <Quiz quiz={quiz} setQuiz={setQuiz} optionsToDisplay={optionsToDisplay} />
  ) : (
    <Result options={{ quiz, setQuiz }} />
  );
};

export default DisplayComponents;
