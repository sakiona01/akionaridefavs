class User < ApplicationRecord
    
    has_many :rides
    has_many :categories, through: :rides 
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :password, presence: true
    
end
