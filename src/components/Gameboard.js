import Card from "./Card";
import "../styles/Gameboard.scss";

export default function Gameboard(props) {
  const { allCards, onClick } = props;
  // create a gameboard, containing a grid of card components
  // - receive randomized card list as a prop (game state)
  // - loop through, generating cards in order
  return (
    <div className="gameboard-container">
      {allCards.map((card) => (
        <Card details={card} onClick={onClick} key={card.name} />
      ))}
    </div>
  );
}
