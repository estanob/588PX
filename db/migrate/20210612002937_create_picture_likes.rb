class CreatePictureLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :picture_likes do |t|
      t.bigint :liker_id, null: false
      t.integer :picture_id, null: false, references: [:pictures, :id]
      t.timestamps
    end
    add_index :picture_likes, [:liker_id, :picture_id], unique: true
  end
end
