# == Schema Information
#
# Table name: pictures_to_galleries
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  gallery_id :integer          not null
#  picture_id :integer          not null
#
# Indexes
#
#  index_pictures_to_galleries_on_gallery_id  (gallery_id)
#  index_pictures_to_galleries_on_picture_id  (picture_id)
#
class PicturesToGallery < ApplicationRecord
  validates :picture_id, :gallery_id, presence: true

  belongs_to :picture,
    primary_key: :id,
    foreign_key: :picture_id,
    class_name: :Picture

  belongs_to :gallery,
    primary_key: :id,
    foreign_key: :gallery_id,
    class_name: :Gallery
end
