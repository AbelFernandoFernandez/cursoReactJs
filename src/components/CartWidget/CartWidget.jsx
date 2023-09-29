import cart from './carrier.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget"  height={50} />
            <br />
            0
        </div>
    )
}
export default CartWidget