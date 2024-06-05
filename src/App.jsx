import { useContributors } from "./hooks/useContributors";

function App() {
  const { shuffledContributors } = useContributors();

  return (
    <div className="App">
      {shuffledContributors.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
