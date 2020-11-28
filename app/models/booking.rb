class Booking < ApplicationRecord
  # belongs_to :user
  before_create :assign_unique_booking_ref

  # validates! :book_ref, uniqueness: true

  private

  CASE_NUMBER_RANGE = (100_000..999_999).freeze
  def assign_unique_booking_ref
    self.booking_ref = loop do
      num = rand(CASE_NUMBER_RANGE)
      number = ('a'..'z').to_a.sample.upcase + num.to_s + ('a'..'z').to_a.sample.upcase + ('a'..'z').to_a.sample(5).join.capitalize.upcase
      break number unless Booking.exists?(booking_ref: number)
    end
  end
end
