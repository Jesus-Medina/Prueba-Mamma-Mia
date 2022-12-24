import MyContext from "../context/MyContext";
import { useContext } from "react";
import "../stylesheets/pizzaDetails.css"
import { useParams } from "react-router-dom";

function PizzaDetails() {

  const { pizzaDetails } = useContext(MyContext)
  const { id } = useParams()

  return (
    <div className="pizza-details-container">
      <div className="pizza-image" style={{ background: `url("${pizzaDetails.img}")` }}>

      </div>
      <div className="pizza-description">
        <h1>{id}</h1>
        <hr />
        <p>{pizzaDetails.desc}</p>
        <div className="pizza-ingredients">
          <p>Ingredientes</p>
          <ul>
            {
              pizzaDetails.ingredients.map((ingredient) => {
                return (
                  <li key={ingredient}>🍕{ingredient}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="price-and-cart">
          <h2>${pizzaDetails.price}</h2>
          <button>Añadir 🛒</button>
        </div>
        
      </div>
    </div>
  )
}

export default PizzaDetails;
