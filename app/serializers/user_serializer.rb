class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :rides
  has_many :categories, through: :rides 
end
