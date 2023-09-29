import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, price, img, stock, category, descripcion}) => {

    return (
        <article className='CartItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} width={200} height={200} className='ItemImg' />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`cantidad agregada`, quantity)} />
            </footer>
        </article>
    )
}
export default ItemDetail