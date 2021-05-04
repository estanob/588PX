class AddMoreIndexToFollowings < ActiveRecord::Migration[5.2]
  def change
    add_index :followings, [:user_id, :followed_user_id], unique: true
  end
end
