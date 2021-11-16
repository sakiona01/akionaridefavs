class RideSerializer < ActiveModel::Serializer
  attributes :id, :title, :overview, :poster_url, :trailer_url, :favorite, :category_id

  belongs_to :user
  belongs_to :category
end
