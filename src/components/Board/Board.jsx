import "./Board.scss";
import { Card } from "../Card/Card";
import { useState } from "react";

function Board({ contributors }) {
  const [cards, setCards] = useState(contributors);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [comparingCards, setComparingCards] = useState(false);

  const handleCardClick = (index) => {
    if (
      comparingCards || // if we are already comparing 2 cards
      flippedCards.includes(index) || // OR if the card is already flipped
      matchedCards.includes(cards[index].avatar) // OR if the card is already matched
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setComparingCards(true);
      const [indexFirstCard, indexSecondCard] = newFlippedCards;
      if (cards[indexFirstCard].avatar === cards[indexSecondCard].avatar) {
        setMatchedCards([...matchedCards, cards[indexFirstCard].avatar]);
        setFlippedCards([]);
        setComparingCards(false);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setComparingCards(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="board">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            contributor={card}
            onClick={() => handleCardClick(index)}
            flipped={
              flippedCards.includes(index) || matchedCards.includes(card.avatar)
            }
          />
        ))}
      </div>
    </div>
  );
}

export { Board };
