import DishContainer from "./components/DishContainer";
import NewDishForm from "./components/NewDishForm";
import { useState, useEffect } from "react"

function App() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch('/dishes')
      .then(res => res.json())
      .then((data) => setDishes(data))
  }, [])


  return (
    <div>
      <NewDishForm dishes={dishes} setDishes={setDishes}/>
      <DishContainer dishes={dishes} setDishes={setDishes}/>
    </div>
  );
}

export default App;
