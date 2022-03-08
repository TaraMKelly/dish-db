import React from 'react'
import Dish from './Dish'

function DishContainer({ dishes, setDishes }) {

    function handleDeleteDish(id) {
        const removeDish = dishes.filter((d) => d.id !== id)
        setDishes(removeDish)
    }

    return (
        <div>
            {dishes.map(dish =>
                <Dish
                    key={dish.id}
                    dish={dish}
                    handleDeleteDish={handleDeleteDish}
                />)}
        </div>
    )
}

export default DishContainer