import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, price, img, stock, category, descripcion }) => {
  const [quantityAdded, setquantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setquantityAdded(quantity);
    const item = {id, name, price}

    addItem(item, quantity);
  };
  return (
    <article className="CartItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} width={200} height={200} className="ItemImg"/>
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {descripcion}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter"> {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">Terminar compra</Link>) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};
export default ItemDetail;
