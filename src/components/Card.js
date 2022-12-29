import "../styles/Card.scss";

export default function Card(props) {
  const { details, onClick } = props;
  const { name, SVG } = details;

  return (
    <div className="card" data-cardname={name} onClick={onClick}>
      <SVG />
    </div>
  );
}
