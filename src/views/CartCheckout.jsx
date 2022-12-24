import MyContext from "../context/MyContext";
import { useContext } from "react";
import "../stylesheets/CartCheckout.css"

function CartCheckout() {

  const { cartTotalValue } = useContext(MyContext)

  return (
    <div className="cart-container">
      <div>
        <h1>Detalles del pedido:</h1>
        <div>
          <div className="add-or-remove">
            <p className="pizza-total">$39.999</p>
            <button className="btn-1">+</button>
            <p>0</p>
            <button className="btn-2">-</button>
          </div>
          <hr />
          <div className="add-or-remove">
            <p className="pizza-total">$39.999</p>
            <button className="btn-1">+</button>
            <p>0</p>
            <button className="btn-2">-</button>
          </div>
          <hr />
          <div className="add-or-remove">
            <p className="pizza-total">$39.999</p>
            <button className="btn-1">+</button>
            <p>0</p>
            <button className="btn-2">-</button>
          </div>
          <hr />
          <div className="add-or-remove">
            <p className="pizza-total">$39.999</p>
            <button className="btn-1">+</button>
            <p>0</p>
            <button className="btn-2">-</button>
          </div>
          <hr />
        </div>
        <h2>Total: ${cartTotalValue}</h2>
        <button >Ir a Pagar</button>
      </div>
    </div>
  )
}

export default CartCheckout;
