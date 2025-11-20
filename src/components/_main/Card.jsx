import DisLikeButton from "./DisLikeButton";
import LikeButton from "./LikeButton";

export default function Card({cardSrc, cardAlt ,category ,title ,author , thumbsUp , thumbsDown}){
    return(
        <div className="cardlist">
            <div className="cardImg">
                <img src={cardSrc} alt={cardAlt} />
            </div>
            <div className="cardTextWrap">
                <div className="cardtext">
                    <h2>{`[${category}]${title}`}</h2>
                    <p>{author}</p>
                </div>
                <div className="ratingButton">
                  <LikeButton  init={thumbsUp} />
                  <DisLikeButton init={thumbsDown} />
                </div>

            </div>
        </div>
    )
}