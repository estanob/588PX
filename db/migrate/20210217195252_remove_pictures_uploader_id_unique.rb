class RemovePicturesUploaderIdUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :pictures, :uploader_id
    add_index :pictures, :uploader_id
  end
end
