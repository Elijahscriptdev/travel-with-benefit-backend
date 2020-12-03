class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :seats
      t.integer :price
      t.integer :total_price
      t.string :booking_ref
      t.string :travel_date
      t.string :travel_time
      t.string :departure
      t.string :destination
      t.string :bus_type
      t.string :bus_company

      t.timestamps
    end
  end
end
