class AddPicturesForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :pictures, :users, column: :uploader_id
  end
end
