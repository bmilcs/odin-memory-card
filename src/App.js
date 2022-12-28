import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  // introduction page
  //  explain game
  //  start button

  // create a master array, containg all card objects
  //  { name: "HTML", icon: HTMLSVG.js }
  //  pass array as prop to cards component
  //  render with dataset attribute 'cardname'
  //  pass eventhandler function

  // state: initialize with:
  //  1. array 1: all cards, random order
  //  2. array 2: history of selected cards [empty]
  //  3. currentScore
  //  4. highScore

  // event handler function for all cards
  //  - on click, capture 'cardname' attr & check history array via .some()
  //    - if no previous hits, randomize card order & increment score
  //    - if card has been selected already:
  //      - compare score to high score. replace if higher.
  //      - reset current score to zero
  //      - reset history array
  //  - restart game loop: randomize cards, random order

  // utility function:
  //  randomize array order: override allCards array in state

  // components
  // app: primary component - state, handlers, logic
  //   header:       page title / github link
  //   scoreboard:   current / high score
  //   gameboard:    grid container for all cards
  //     card:       generate individual cards

  return (
    <>
      <Header />
    </>
  );
}

export default App;
