// import Item from './Item';

// // // Lista de productos usando el componente Item
// // export default function ItemList({ productos }) {
// //     return (
// //         <ul style={{ listStyle: 'none', padding: 0 }}>
// //             {productos.map((producto) => (
// //                 <Item key={producto.id} producto={producto} />
// //             ))}
// //         </ul>
// //     );
// // }

import Item from "./Item";
import "../styles/ItemList.css"; // lo creamos si hace falta

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