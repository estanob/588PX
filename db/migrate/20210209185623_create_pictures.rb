class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :location, null: false
      t.integer :uploader_id, null: false, references: [:users, :id]
      t.timestamps
    end
  end
end
