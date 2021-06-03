class GalleryAddDescription < ActiveRecord::Migration[5.2]
  def change
    add_column :galleries, :description, :string
  end
end
