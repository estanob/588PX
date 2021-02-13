class RemoveIndexFromCreatorId < ActiveRecord::Migration[5.2]
  def change
    remove_index :galleries, :creator_id
  end
end
