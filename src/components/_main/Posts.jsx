import bamosList from "../../bamosList.js";
import Card from "./Card";
export default function Posts() {
  return (
    <>
    <div className="cardContainer">
      {bamosList.map((item ,index) => (
        <Card
        key={index}
        author={item.author}
        title={item.title}
        category={item.category}
        cardSrc={item.image}
        thumbsUp={item.thumbsUp}
        thumbsDown={item.thumbsDown}
        />
  ))
}
    </div>
    </>
  );
}
