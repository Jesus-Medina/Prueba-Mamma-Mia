import './stylesheets/App.css';
import { getPizzas } from "./functions/functions";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PizzaCatalog from './views/PizzaCatalog';
import PizzaDetails from './views/PizzaDetails';
import CartCheckout from './views/CartCheckout';
import NotFound from './views/NotFound';
import MyContext from './context/MyContext';
import NavbarComponent from "./components/NavbarComponent";

function App() {

  const [pizzas, setPizzas] = useState(null)
  const [cartTotalValue, setCartTotalValue] = useState(0)
  const [pizzaDetails, setPizzaDetails] = useState(null)

  const sharedContext = {
    pizzas,
    setPizzas,
    cartTotalValue,
    setCartTotalValue,
    pizzaDetails,
    setPizzaDetails,
  }

  useEffect(() => {
    getPizzas(setPizzas)
  }, [])

  return (
    <div className="App">
      <MyContext.Provider value={sharedContext}>
        <BrowserRouter>
          <NavbarComponent/>
          <Routes>
            <Route path="/" element={<PizzaCatalog />} />
            <Route path="/pizzaDetails/:id" element={<PizzaDetails />} />
            <Route path="/cartCheckout" element={<CartCheckout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
