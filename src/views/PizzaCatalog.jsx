import MyContext from "../context/MyContext";
import { useContext } from "react";
import "../stylesheets/PizzaCatalog.css"
import { useNavigate } from "react-router-dom";
import HeaderComponent from './../components/HeaderComponent';

function PizzaCatalog() {

  const { pizzas, pizzaDetails, setPizzaDetails, } = useContext(MyContext)

  const navigate = useNavigate()

  function handleChange() {
    navigate(`/pizzaDetails/${pizzaDetails.name}`)
  }

  return (
    <>
      <HeaderComponent />
      <div className="catalog-container grid-columns-4">
        {
          pizzas !== null
            ? pizzas.map((pizza) => {
              return (
                <div className="pizza-card" key={pizza.id}>
                  <img src={pizza.img} alt={`pizza ${pizza.name}`} />
                  <h4>{pizza.name}</h4>
                  <hr />
                  <p>Ingredientes</p>
                  <ul>
                    {
                      pizza.ingredients.map((ingrediente) => {
                        return (
                          <li key={ingrediente + pizza.id}>🍕{ingrediente}</li>
                        )
                      })
                    }
                  </ul>
                  <hr className="hr-2" />
                  <h2>${pizza.price}</h2>
                  <div className="btn-container">
                    <form onSubmit={handleChange}>
                      <button type="submit" className="btn-1" onClick={() => setPizzaDetails(pizza)}>Ver Más 👀</button>
                    </form>
                    <button className="btn-2">Añadir 🛒</button>
                  </div>
                </div>
              )
            })
            : <p>No han cargado las pizzas</p>
        }
      </div>
    </>

  )
}

export default PizzaCatalog;
