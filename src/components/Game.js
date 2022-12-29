import { cardList } from "../modules/cardList";
import { useState } from "react";
import Gameboard from "./Gameboard";
import Scoreboard from "./Scoreboard";

// components
// app
//   header:       page title / github link
//   game:         primary component - state, handlers, logic
//     scoreboard:   current / high score
//     gameboard:    grid container for all cards
//       card:       generate individual cards

// todo: introduction page
//  explain game
//  start button

export default function Game(props) {
  const [cards, setCards] = useState(cardList);
  const [history, setHistory] = useState([]);
  const { highScore, setHighScore, currentScore, setCurrentScore } = props;

  const handleCardClick = (e) => {
    // get name of card that was clicked via 'data-cardname' attribute
    const {
      dataset: { cardname: newCard },
    } = e.target;

    if (isRepeatSelection(newCard)) roundOver();
    else {
      addToHistory(newCard);
      incrementCurrentScore();
      shuffleCards();
    }
  };

  const isRepeatSelection = (currentCard) => {
    return history.some((prevCard) => prevCard === currentCard);
  };

  const addToHistory = (cardName) => setHistory([...history, cardName]);

  const incrementCurrentScore = () => setCurrentScore(currentScore + 1);

  const shuffleCards = () => {
    // utilizes the fisher-yates (aka knuth) shuffle algorithm

    // create a copy of the cards array
    let shuffledDeck = [...cards];

    // starting at the last card
    let currentIndex = shuffledDeck.length;
    let randomIndex;

    // while cards remain that need to be shuffled
    while (currentIndex !== 0) {
      // randomly select another card: from index 0 to currentIndex - 1
      // example: currentIndex of 3 = 0, 1, or 2
      randomIndex = Math.floor(Math.random() * currentIndex);

      // decrement current card
      currentIndex--;

      // swap current card with the random card via array destructuring
      [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [
        shuffledDeck[randomIndex],
        shuffledDeck[currentIndex],
      ];
    }

    // update state with the newly shuffled deck array
    setCards(shuffledDeck);
  };

  const roundOver = () => {
    if (isNewHighScore()) updateHighScore();
    resetCurrentScore();
    clearHistory();
  };

  const updateHighScore = () => setHighScore(currentScore);

  const isNewHighScore = () => currentScore > highScore;

  const resetCurrentScore = () => setCurrentScore(0);

  const clearHistory = () => setHistory([]);

  return <Gameboard allCards={cards} onClick={handleCardClick} />;
}
