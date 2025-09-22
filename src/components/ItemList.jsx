
import Item from "./Item";
import "../styles/ItemList.css"; 

const ItemList = ({ productos }) => {
    return (
        <div className="item-list-container">
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;