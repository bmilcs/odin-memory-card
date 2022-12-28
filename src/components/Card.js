import "../styles/Card.scss";

export default function Card(props) {
  const { details } = props;
  const { name, SVG } = details;

  // create individual cards
  //   - card name
  //   - svg image
  //   - click click event handler

  return (
    <div className="card" data-cardname={name}>
      <SVG />
      <h2 className="card-name">{name}</h2>
    </div>
  );
}
