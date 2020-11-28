class User < ApplicationRecord
  has_secure_password
  # has_many :bookings
  validates :email, uniqueness: true, on: :create
  validates_presence_of :email, :password
end
