import CartWidget from '../CartWidget/CartWidget'
import logo from './qtftrans.png'



const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" width={200} />
            <div>
                <button>Budismo</button>
                <button>Norteño</button>
                <button>Sahumerios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar