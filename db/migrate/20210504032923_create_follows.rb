class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.bigint :user_id, index: { unique: true }
      t.integer :followee_id, null: false, index: { unique: true }
      t.timestamps
    end
    add_index :follows, [:user_id, :followee_id], unique: true
  end
end
