import { items } from "./ItemList";
import Card from "./Card";

const CardList = ({items}) => {
    const itemArray= items.map((item, index)=>(
    <Card id={items[index].id}
          name={items[index].name}
          description={items[index].description}/>
    ));
    return (
        <div>{itemArray}</div> 
    );
}
 
export default CardList;