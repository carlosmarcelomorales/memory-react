import { useEffect, useState } from "react";
import { useContributors } from "./hooks/useContributors";

function App() {
  const { data } = useContributors();

  return (
    <div className="App">
      {data.map((item) => (
        <p>{item.id}</p>
      ))}
    </div>
  );
}

export default App;
