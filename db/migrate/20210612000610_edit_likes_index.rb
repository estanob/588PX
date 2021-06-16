class EditLikesIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, name: "index_likes_on_post_id"
    add_index :likes, [:liker_id, :post_id], unique: true
  end
end
