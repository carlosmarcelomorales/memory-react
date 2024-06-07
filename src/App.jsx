import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { useState } from "react";
import { Menu } from "./components/screens/Menu/Menu";
import { DefeatScreen } from "./components/screens/DefeatScreen/DefeatScreen";
import { GameScreen } from "./components/screens/GameScreen/GameScreen";

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
        <GameScreen
          contributors={contributors}
          onTimeUp={onTimeUp}
          increaseScore={increaseScore}
          totalTime={totalTime}
          score={score}
        />
      )}
      {gameState === GAME_STATES.DEFEAT && <DefeatScreen />}
      {gameState === GAME_STATES.PLAYING && contributors.length === 0 && (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
