class IndexPictureToGallery < ActiveRecord::Migration[5.2]
  def change
    add_index :pictures_to_galleries, [:picture_id, :gallery_id], unique: true
  end
end
