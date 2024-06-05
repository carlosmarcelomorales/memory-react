import "./Board.scss";
import { Card } from "../Card/Card";

function Board({ contributors }) {
  return (
    <div className="board">
      <div className="card-grid">
        {contributors.map((contributor, index) => (
          <Card key={index} contributor={contributor} />
        ))}
      </div>
    </div>
  );
}

export { Board };
