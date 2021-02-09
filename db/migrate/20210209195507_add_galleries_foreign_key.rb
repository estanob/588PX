class AddGalleriesForeignKey < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :galleries, :users, column: :creator_id
  end
end
