class AddIngredientsToDishes < ActiveRecord::Migration[6.1]
  def change
    add_column :dishes, :ingredients, :text
  end
end
