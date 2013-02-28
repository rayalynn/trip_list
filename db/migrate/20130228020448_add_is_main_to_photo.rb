class AddIsMainToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :isMainPhoto, :boolean
  end
end
