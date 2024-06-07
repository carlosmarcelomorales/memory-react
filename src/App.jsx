import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { Board } from "./components/Board/Board";
import { Countdown } from "./components/Countdown/Countdown";
import { Fragment } from "react";

function App() {
  const totalTime = 60;
  const { shuffledContributors: contributors } = useContributors();

  return (
    <div className="App">
      {contributors.length > 0 ? (
        <Fragment>
          <header>Github Memory</header>
          <div className="game-container">
            <Board contributors={contributors} />
            <Countdown time={totalTime} />
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
