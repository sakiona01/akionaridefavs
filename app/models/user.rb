class User < ApplicationRecord
    has_many :rides
    has_many :categories, through: :rides 

    validates :username, presence: true, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :password, presence: true
    validates :password_confirmation, presence: true
end
