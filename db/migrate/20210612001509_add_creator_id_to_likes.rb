class AddCreatorIdToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :creator_id, :integer, null: false
  end
end
