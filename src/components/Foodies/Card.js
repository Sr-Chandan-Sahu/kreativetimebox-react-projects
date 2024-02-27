import './Card.css';
const Card = (props) => {
    return (
        <div className='card'>
            <img src={`https://source.unsplash.com/300x300/?${props.name}`} alt="food-images" className="br3"/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        
    );
}
 
export default Card;