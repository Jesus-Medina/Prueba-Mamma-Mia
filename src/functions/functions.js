import axios from "axios";

async function getPizzas(setPizzas) {
  const endpoint = "/pizzas.json"
  try {
    const request = await axios.get(endpoint)
    console.log(request.data)
    setPizzas(request.data)
    
  } catch (error) {
    console.error(error)
  }
}

export {
  getPizzas
}