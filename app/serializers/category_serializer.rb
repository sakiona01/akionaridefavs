class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :rides
  has_many :users, through: :rides
end
