import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { useState } from "react";
import { Menu } from "./components/screens/Menu/Menu";
import { DefeatScreen } from "./components/screens/DefeatScreen/DefeatScreen";
import { GameScreen } from "./components/screens/GameScreen/GameScreen";
import { VictoryScreen } from "./components/screens/VictoryScreen/VictoryScreen";

const GAME_STATES = {
  INITIAL: "initial",
  PLAYING: "playing",
  DEFEAT: "defeat",
  VICTORY: "victory",
};

function App() {
  const totalTime = 60;
  const amountScorePerMatch = 100;
  const { shuffledContributors: contributors } = useContributors();
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATES.INITIAL);
  const [totalMatches, setTotalMatches] = useState(0);

  const onMatch = () => {
    setScore(score + amountScorePerMatch);
    setTotalMatches((prevMatches) => {
      const newMatches = prevMatches + 1;
      if (newMatches === contributors.length / 2) {
        setGameState(GAME_STATES.VICTORY);
      }
      return newMatches;
    });
  };

  const startGame = () => {
    setScore(0);
    setGameState(GAME_STATES.PLAYING);
  };

  const onTimeUp = () => {
    setTimeout(() => {
      setGameState(GAME_STATES.DEFEAT);
      setTimeout(() => {
        setGameState(GAME_STATES.INITIAL);
      }, 3000);
    }, 0);
  };

  return (
    <div className="App">
      {gameState === GAME_STATES.INITIAL && <Menu startGame={startGame} />}
      {gameState === GAME_STATES.PLAYING && contributors.length > 0 && (
        <GameScreen
          contributors={contributors}
          onTimeUp={onTimeUp}
          onMatch={onMatch}
          totalTime={totalTime}
          score={score}
        />
      )}
      {gameState === GAME_STATES.DEFEAT && <DefeatScreen />}
      {gameState === GAME_STATES.VICTORY && <VictoryScreen />}
      {gameState === GAME_STATES.PLAYING && contributors.length === 0 && (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
