class AddPicturesCaptionKey < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :caption, :string
  end
end
