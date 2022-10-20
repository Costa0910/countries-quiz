import "./app.css";
import DisplayComponents from "./components/DisplayComponents";

function App() {
  return (
    <div className="App">
      <h1>Country Quiz</h1>
      <DisplayComponents />
      <p>
        created by Armando Costa -{" "}
        <a href="https://devChallenges.io">devChallenges</a>
      </p>
    </div>
  );
}

export default App;
