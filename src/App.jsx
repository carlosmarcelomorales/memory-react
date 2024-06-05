import { useContributors } from "./hooks/useContributors";
import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  const { shuffledContributors: contributors } = useContributors();

  return (
    <div className="App">
      <Board contributors={contributors}></Board>
    </div>
  );
}

export default App;
