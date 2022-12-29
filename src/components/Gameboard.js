import Card from "./Card";
import "../styles/Gameboard.scss";

export default function Gameboard(props) {
  const { allCards, onClick } = props;

  return (
    <main className="gameboard-container">
      {allCards.map((card) => (
        <Card details={card} onClick={onClick} key={card.name} />
      ))}
    </main>
  );
}
