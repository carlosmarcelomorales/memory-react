import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { Board } from "./components/Board/Board";
import { Countdown } from "./components/Countdown/Countdown";
import { Fragment, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { DefeatScreen } from "./components/DefeatScreen/DefeatScreen";

const GAME_STATES = {
  INITIAL: "initial",
  PLAYING: "playing",
  DEFEAT: "defeat",
};

function App() {
  const totalTime = 60;
  const amountScorePerMatch = 100;
  const { shuffledContributors: contributors } = useContributors();
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATES.INITIAL);

  const increaseScore = () => {
    setScore(score + amountScorePerMatch);
  };

  const startGame = () => {
    setScore(0);
    setGameState(GAME_STATES.PLAYING);
  };

  const onTimeUp = () => {
    setGameState(GAME_STATES.DEFEAT);
    setTimeout(() => {
      setGameState(GAME_STATES.INITIAL);
    }, 3000);
  };

  return (
    <div className="App">
      {gameState === GAME_STATES.INITIAL && <Menu startGame={startGame} />}

      {gameState === GAME_STATES.PLAYING && contributors.length > 0 && (
        <Fragment>
          <header>Github Memory</header>
          <div className="game-container">
            <Board contributors={contributors} onMatch={increaseScore} />
            <div className="info-bar">
              <Countdown time={totalTime} onTimeUp={onTimeUp} />
              <div className="score">Score: {score}</div>
            </div>
          </div>
        </Fragment>
      )}

      {gameState === GAME_STATES.DEFEAT && <DefeatScreen />}
    </div>
  );
}

export default App;
