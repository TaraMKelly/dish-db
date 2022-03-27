class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :ingredients
end
