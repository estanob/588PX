class DeleteApiTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :api_likes
  end
end
