import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { Board } from "./components/Board/Board";
import { Countdown } from "./components/Countdown/Countdown";
import { Fragment, useState } from "react";
import { Menu } from "./components/Menu/Menu";

function App() {
  const totalTime = 60;
  const amountScorePerMatch = 100;
  const { shuffledContributors: contributors } = useContributors();
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const increaseScore = () => {
    setScore(score + amountScorePerMatch);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      {gameStarted ? (
        contributors.length > 0 ? (
          <Fragment>
            <header>Github Memory</header>
            <div className="game-container">
              <Board contributors={contributors} onMatch={increaseScore} />
              <div className="info-bar">
                <Countdown time={totalTime} />
                <div className="score">Score: {score}</div>
              </div>
            </div>
          </Fragment>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <Menu startGame={startGame} />
      )}
    </div>
  );
}

export default App;
