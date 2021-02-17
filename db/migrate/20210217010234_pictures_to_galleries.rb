class PicturesToGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures_to_galleries do |t|
      t.integer :picture_id
      t.integer :gallery_id
      t.timestamps
      t.index :picture_id, unique: true
      t.index :gallery_id
    end
  end
end
