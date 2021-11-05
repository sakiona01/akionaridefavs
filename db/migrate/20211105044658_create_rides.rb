class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.string :title
      t.string :overview
      t.string :poster_url
      t.string :trailer_url
      t.integer :category_id

      t.timestamps
    end
  end
end
