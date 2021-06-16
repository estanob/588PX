class EditLikesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :uploader_id
    add_column :likes, :liker_id, :integer, null: false, index: { unique: true }
    add_index :likes, :post_id
  end
end
