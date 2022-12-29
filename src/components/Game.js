import { useState, useEffect } from "react";
import { cardList } from "../modules/cardList";
import Gameboard from "./Gameboard";

export default function Game(props) {
  const [cards, setCards] = useState(cardList);
  const [history, setHistory] = useState([]);
  const { highScore, setHighScore, currentScore, setCurrentScore } = props;

  const handleCardClick = (e) => {
    // get name of card that was clicked via 'data-cardname' attribute
    const {
      dataset: { cardname: clickedCard },
    } = e.target;

    if (isRepeatSelection(clickedCard)) roundOver();
    else {
      addCardToHistory(clickedCard);
      incrementCurrentScore();
    }
  };

  const isRepeatSelection = (currentCard) => {
    return history.some((prevCard) => prevCard === currentCard);
  };

  const addCardToHistory = (cardName) => setHistory([...history, cardName]);

  const incrementCurrentScore = () => setCurrentScore(currentScore + 1);

  const roundOver = () => {
    if (isNewHighScore()) updateHighScore();
    resetCurrentScore();
    clearHistory();
  };

  const isNewHighScore = () => currentScore > highScore;

  const updateHighScore = () => setHighScore(currentScore);

  const resetCurrentScore = () => setCurrentScore(0);

  const clearHistory = () => setHistory([]);

  useEffect(() => {
    const shuffleDeck = () => {
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

    // shuffle deck on currentScore change
    shuffleDeck();
  }, [currentScore]);

  return <Gameboard allCards={cards} onClick={handleCardClick} />;
}
