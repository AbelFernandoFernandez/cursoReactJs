import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id}>
            <br />
            <h3>{prod.name}</h3>
            <p>Precio unit: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
            <br />
          </div>
        ))
      }

      {
        carrito.length > 0 ?
          <>
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar</button>
            <button><Link to="/checkout">Finalizar compra</Link></button>
          </> :
          <h2>El carrito está vacío </h2>
      }

    </div>
  )
}

export default Carrito