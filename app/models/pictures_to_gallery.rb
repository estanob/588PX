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
#  index_pictures_to_galleries_on_picture_id_and_gallery_id  (picture_id,gallery_id) UNIQUE
#
class PicturesToGallery < ApplicationRecord
  validates :picture_id, :gallery_id, presence: true

  has_many :pictures,
    primary_key: :id,
    foreign_key: :picture_id,
    class_name: :Picture

  has_one :gallery,
    primary_key: :id,
    foreign_key: :gallery_id,
    class_name: :Gallery
end
