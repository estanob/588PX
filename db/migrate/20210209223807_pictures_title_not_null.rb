class PicturesTitleNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pictures, :title, false, false
  end
end
