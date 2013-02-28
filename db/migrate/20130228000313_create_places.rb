class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.text :title
      t.text :headline
      t.text :notes
      t.integer :photo_id
      t.integer :user_id

      t.timestamps
    end
  end
end
