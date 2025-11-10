export default function CardImg({ cardSrc, cardAlt }) {
  return (
    <div className="cardImg">
      <img src={cardSrc} alt={cardAlt} />
    </div>
  );
}
