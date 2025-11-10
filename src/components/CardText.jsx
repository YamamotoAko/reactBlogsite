export default function CardText({category ,title ,author}){
    return(
        <div className="cardtext">
        <h2>{`[${category}]${title}`}</h2>
        <p>{author}</p>
        </div>
    )
}