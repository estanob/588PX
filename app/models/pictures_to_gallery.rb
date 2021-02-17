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
class PicturesToGallery < ApplicationRecord
  validates :picture_id, :gallery_id, presence: true

  belongs_to :picture,
    foreign_key: :picture_id,
    class_name: :Picture

  belongs_to :gallery,
    foreign_key: :gallery_id,
    class_name: :Gallery
end
