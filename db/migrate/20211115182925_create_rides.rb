class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.string :title
      t.string :overview
      t.string :poster_url
      t.string :trailer_url
      t.boolean :favorite

      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end