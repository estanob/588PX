class AddIndexToFollowings < ActiveRecord::Migration[5.2]
  def change
    add_index :followings, :user_id
    add_index :followings, :followed_user_id
  end
end
