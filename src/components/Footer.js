import GithubSVG from "../assets/Github";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="git-container">
        <a href="https://github.com/bmilcs/odin-memory-card">
          <GithubSVG />
          bmilcs
        </a>
      </div>
    </footer>
  );
}
