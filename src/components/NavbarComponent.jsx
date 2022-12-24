import MyContext from "../context/MyContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/NavbarStyle.css"

function NavbarComponent() {

  const { cartTotalValue } = useContext(MyContext)

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <div className="navbar">

      <NavLink to="/" className={setActiveClass}>
        <h3>🍕 Pizzeria Mamma Mia!</h3>
      </NavLink>

      <NavLink to="/cartCheckout" className={setActiveClass}>
        <h3>🛒 $ {cartTotalValue}</h3>
      </NavLink>



    </div>
  )
}

export default NavbarComponent;
