class RemovePicsToGalIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :pictures_to_galleries, [ :gallery_id, :picture_id ]
  end
end
