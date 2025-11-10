import bamosList from '../bamosList';
import CardImg from './CardImg';
import LikeButton from './LikeButton';
import DisLikeButton from './DisLikeButton';
import CardText from './CardText';
export default function Posts() {
  const postData = bamosList;
  const cardList = postData.map((data) => (
    <li className='cardlist'
        key={data.title}>
          <CardImg cardSrc={data.image} cardAlt={data.author} />
          <div className='cardTextWrap'>
                <CardText category={data.category} title={data.title} author={data.author} />
                <div className="ratingButton">
                    <LikeButton init={data.thumbsUp} />
                    <DisLikeButton init={data.thumbsDown} />
                </div>
          </div>
    </li>
  ));
  return (
    <>
      <ul className="cardWrap">{cardList}</ul>
    </>
  );
}
