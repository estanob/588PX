class AddPicturesToGalleriesForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :pictures_to_galleries, :pictures, column: :picture_id
    add_foreign_key :pictures_to_galleries, :galleries, column: :gallery_id
  end
end
