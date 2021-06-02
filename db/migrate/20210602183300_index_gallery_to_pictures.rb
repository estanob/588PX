class IndexGalleryToPictures < ActiveRecord::Migration[5.2]
  def change
    add_index :pictures_to_galleries, [ :gallery_id, :picture_id ], unique: true
  end
end
