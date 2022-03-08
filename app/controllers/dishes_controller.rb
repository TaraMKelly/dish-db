class DishesController < ApplicationController
    wrap_parameters format: []
    
    # GET /comments
    def index
        dishes = Dish.all
        render json: dishes, status: :ok
    end
    
    
    # POST /dishes
    def create
        dish = Dish.create(dish_params)
        render json: dish, status: :created
    end
    
    # DELETE /dishes/:id
    def destroy
        dish = find_dish
        dish.destroy
        head :no_content
    end
    
    private

    def find_dish
        Dish.find(params[:id])
    end
      
    def dish_params
        params.permit(:name)
    end
    

end
