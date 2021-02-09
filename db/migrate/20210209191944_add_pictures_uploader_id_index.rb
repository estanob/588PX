class AddPicturesUploaderIdIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :pictures, :uploader_id
  end
end
