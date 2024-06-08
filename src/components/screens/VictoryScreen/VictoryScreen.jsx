import "./VictoryScreen.scss";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

function VictoryScreen() {
  return (
    <div className="victory-screen">
      <h1>Congratulations!</h1>
      <p>You Won!</p>
      <Fireworks autorun={{ speed: 3 }} />
    </div>
  );
}

export { VictoryScreen };
