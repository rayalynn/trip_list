class RemovePhotoIdFromPhoto < ActiveRecord::Migration
  def change
    remove_column :places, :photo_id
  end
end
