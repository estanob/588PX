class CreateApiLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :api_likes do |t|
      t.integer :liker_id, null: false, references: [:users, :id]
      t.integer :post_id, null: false
      t.timestamps
    end
  end
end
