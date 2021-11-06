class AddFavoriteToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :favorite, :boolean
  end
end
