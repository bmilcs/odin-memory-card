import Header from "./components/Header";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import { useState } from "react";
import "./styles/App.scss";
import Footer from "./components/Footer";

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
