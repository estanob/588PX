class RemoveIndexFromFollows < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, name: "index_follows_on_followee_id"
    remove_index :follows, name: "index_follows_on_user_id"
  end
end
