class CreatePicturesToGalleries < ActiveRecord::Migration[5.2]
  def change
    drop_table :pictures_to_galleries

    create_table :pictures_to_galleries do |t|
      t.integer :picture_id, null: false, references: [:pictures, :id]
      t.integer :gallery_id, null: false, references: [:galleries, :id]
      t.timestamps
    end
  end
end
