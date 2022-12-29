import Header from "./components/Header";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import { useState } from "react";
import "./styles/App.scss";
import Footer from "./components/Footer";

// COMPONENTS -----------------------------------------------------------------
// app:            parent component: initializes score state
//   header:       page title
//   footer:       github repo link
//   scoreboard:   displays scores, current / high
//   game:         "main" component - game logic/state & card click handler
//     gameboard:    renders grid of card components
//       card:       generate individual cards
// ----------------------------------------------------------------------------

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header />
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Footer />
      <Game
        currentScore={currentScore}
        highScore={highScore}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
