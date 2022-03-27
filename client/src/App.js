import DishContainer from "./components/DishContainer";
import NewDishForm from "./components/NewDishForm";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react"

function App() {
  const [dishes, setDishes] = useState([])
  const [searchedDishes, setSearchedDishes] = useState("")


  useEffect(() => {
    fetch('/dishes')
      .then(res => res.json())
      .then((data) => setDishes(data))
  }, [])


  // dish.ingredients.split(",").indexOf(splitSearch) >= 0
  // const splitIngredients = dishes.ingredients.split(",")
  const splitSearch = searchedDishes.split(", ")
  const filteredDishes = dishes.filter((dish) =>
    dish.ingredients.split(", ").every((i) => 
    splitSearch.includes(i))
  )

  console.log(filteredDishes)
  return (
    <div>
      <SearchBar onSearch={setSearchedDishes} />
      <NewDishForm dishes={dishes} setDishes={setDishes} />
      <DishContainer dishes={filteredDishes} setDishes={setDishes} />
    </div>
  );
}

export default App;
