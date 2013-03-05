class SetDefaultIsCompletedToPlaces < ActiveRecord::Migration
  def change
    change_column_default :places, :isCompleted, false 
  end
end
