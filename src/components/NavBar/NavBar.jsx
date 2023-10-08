import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./qtftrans.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <img src={logo} alt="Logo" width={150} />
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/budismo`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Budismo
        </NavLink>
        <br />
        <NavLink
          to={`/category/norteño`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Norteño
        </NavLink>
        <br />
        <NavLink
          to={`/category/sahumerio`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Sahumerios
        </NavLink>
        <br />
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
