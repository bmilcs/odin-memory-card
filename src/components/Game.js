import { cardList } from "../modules/cardList";
import { useState } from "react";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

export default function Game() {
  // state: initialize with:
  //  1. array 1: all cards, random order
  //  2. array 2: history of selected cards [empty]
  //  3. currentScore
  //  4. highScore
  const [cards, setCards] = useState(cardList);
  const [history, setHistory] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // event handler function for all cards
  //  - on click, capture 'cardname' attr & check history array via .some()
  //    - if no previous hits, randomize card order & increment score
  //    - if card has been selected already:
  //      - compare score to high score. replace if higher.
  //      - reset current score to zero
  //      - reset history array
  //  - restart game loop: randomize cards, random order

  const handleCardClick = (e) => {
    // get name of the card that was clicked: data-cardname attribute
    const {
      dataset: { cardname: newCard },
    } = e.target;

    if (isRepeatSelection(newCard)) roundOver();
    else {
      addToHistory(newCard);
      incrementCurrentScore();
    }
  };

  const isRepeatSelection = (currentCard) => {
    return history.some((prevCard) => prevCard === currentCard);
  };

  const addToHistory = (cardName) => setHistory([...history, cardName]);

  const incrementCurrentScore = () => setCurrentScore(currentScore + 1);

  const roundOver = () => {
    if (isNewHighScore()) updateHighScore();
    resetCurrentScore();
    clearHistory();
  };

  const updateHighScore = () => setHighScore(currentScore);

  const isNewHighScore = () => currentScore > highScore;

  const resetCurrentScore = () => setCurrentScore(0);

  const clearHistory = () => setHistory([]);

  // create a master array, containg all card objects
  //  { name: "HTML", icon: HTMLSVG.js }
  //  pass array as prop to cards component
  //  render with dataset attribute 'cardname'
  //  pass eventhandler function

  // utility function:
  //  randomize array order: override allCards array in state

  // components
  // app
  //   header:       page title / github link
  //   game:         primary component - state, handlers, logic
  //     scoreboard:   current / high score
  //     gameboard:    grid container for all cards
  //       card:       generate individual cards

  // introduction page
  //  explain game
  //  start button

  return (
    <main>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard allCards={cards} onClick={handleCardClick} />
    </main>
  );
}
