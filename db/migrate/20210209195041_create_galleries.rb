class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false, references: [:users, :id], index: {unique: true}
      t.timestamps
    end
  end
end
