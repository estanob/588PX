class AddPicturesGalleriesNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pictures_to_galleries, :picture_id, false
    change_column_null :pictures_to_galleries, :gallery_id, false
  end
end
