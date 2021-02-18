class PictureToGalleriesAddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :pictures_to_galleries, :picture_id
    add_index :pictures_to_galleries, :gallery_id
  end
end
