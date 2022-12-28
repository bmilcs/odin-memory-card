import "../styles/Scoreboard.scss";

export default function Scoreboard() {
  // render a Scoreboard containing current & high score

  return (
    <div className="scoreboard-container">
      <h3 className="scoreboard-title">Scores</h3>
      <div className="scoreboard-wrapper">
        <div className="score-container">
          <p className="scoretype-label">Current</p>
          <h2 className="score current">8</h2>
        </div>
        <div className="score-container">
          <p className="scoretype-label">High</p>
          <h2 className="score high">5</h2>
        </div>
      </div>
    </div>
  );
}
