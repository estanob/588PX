class CreateFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.bigint :user_id
      t.integer :followed_user_id, null: false
      t.timestamps
    end
  end
end
