import React from 'react'
import {useState} from 'react'

function NewDishForm({dishes, setDishes}) {
  const [dishName, setDishName] = useState("")
  const [ingredients, setIngredients] = useState("")

  async function onDishSubmit(e) {
    e.preventDefault()
    const res = await fetch(`/dishes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: dishName,
        ingredients: ingredients
      })
    })
    const parsedBody = await res.json()
    console.log(parsedBody)
    setDishes([parsedBody, ...dishes])
    setDishName("")
  }


  return (
    <form onSubmit={onDishSubmit}>
      <input type="text" name="name" placeholder='Add a dish name...' value={dishName} 
        onChange={(e) => setDishName(e.target.value)} />
      <input type="text" name="name" placeholder='Add ingredients...' value={ingredients} 
        onChange={(e) => setIngredients(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default NewDishForm