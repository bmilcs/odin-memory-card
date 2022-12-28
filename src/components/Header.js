import "../styles/Header.scss";
import GithubSVG from "../assets/Github";

export default function Header() {
  return (
    <header>
      <h1 className="page-title">
        Web Dev <span>Memory Game</span>
      </h1>
      <div className="git-container">
        <a href="https://github.com/bmilcs/odin-memory-card">
          <GithubSVG />
          bmilcs
        </a>
      </div>
    </header>
  );
}
