import { useContributors } from "./hooks/useContributors";
import "./App.scss";
import { Board } from "./components/Board/Board";

function App() {
  const { shuffledContributors: contributors } = useContributors();

  return (
    <div className="App">
      {contributors.length > 0 ? (
        <Board contributors={contributors} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
