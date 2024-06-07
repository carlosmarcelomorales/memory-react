import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { Board } from "./components/Board/Board";
import { Countdown } from "./components/Countdown/Countdown";
import { Fragment, useState } from "react";

function App() {
  const totalTime = 60;
  const amountScorePerMatch = 100;
  const { shuffledContributors: contributors } = useContributors();
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + amountScorePerMatch);
  };

  return (
    <div className="App">
      {contributors.length > 0 ? (
        <Fragment>
          <header>Github Memory</header>
          <div className="game-container">
            <Board contributors={contributors} onMatch={increaseScore} />
            <Countdown time={totalTime} />
            <div>Score: {score}</div>
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
