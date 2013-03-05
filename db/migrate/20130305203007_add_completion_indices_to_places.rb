class AddCompletionIndicesToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :isCompleted,    :boolean
    add_column :places, :completionDate, :datetime
  end
end
