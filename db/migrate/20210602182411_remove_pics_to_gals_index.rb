class RemovePicsToGalsIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :pictures_to_galleries, [ :picture_id, :gallery_id ]
  end
end
