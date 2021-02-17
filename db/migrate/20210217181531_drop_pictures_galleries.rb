class DropPicturesGalleries < ActiveRecord::Migration[5.2]
  def change
    drop_table :pictures_galleries
  end
end
