import "./CartItem.css";

const CartItem = ({ name, price, img }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img
          src={img}
          alt={name}
          width={200}
          height={200}
          className="ItemImg"
        />
      </picture>
      <section>
        <p className="Info">precio: ${price}</p>
      </section>
      {/* <footer className="ItemFooter">
          <Link to={`/item/${id}`}>Detalle</Link>
        </footer> */}
    </article>
  );
};
export default CartItem;
