class AddLocationToPlace < ActiveRecord::Migration
  def change
    add_column :places, :location, :text
  end
end
