class AddUserIdToRides < ActiveRecord::Migration[6.1]
  def change
    add_column :rides, :user_id, :integer
  end
end
