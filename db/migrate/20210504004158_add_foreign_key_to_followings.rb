class AddForeignKeyToFollowings < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :followings, :users, column: :user_id
  end
end
