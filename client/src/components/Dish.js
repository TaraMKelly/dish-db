import React from 'react'

function Dish({ dish, handleDeleteDish }) {

    function deleteClick(e) {
        e.preventDefault()
        fetch(`/dishes/${dish.id}`, {
            method: "DELETE"
        })
        handleDeleteDish(dish.id)
    }


    return (
        <ul>
            <li>{dish.name}: {dish.ingredients}</li>
            
            <button onClick={deleteClick}>Delete Dish</button>
        </ul>
    )
}

export default Dish