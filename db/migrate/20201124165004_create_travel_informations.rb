class CreateTravelInformations < ActiveRecord::Migration[6.0]
  def change
    create_table :travel_informations do |t|
      t.string :departure
      t.string :destination
      t.string :bus_type
      t.string :bus_company
      t.integer :price
      t.string :travel_date
      t.string :travel_time

      t.timestamps
    end
  end
end
