# == Schema Information
#
# Table name: pictures
#
#  id          :bigint           not null, primary key
#  caption     :string
#  location    :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  uploader_id :integer          not null
#
# Indexes
#
#  index_pictures_on_uploader_id  (uploader_id)
#
# Foreign Keys
#
#  fk_rails_...  (uploader_id => users.id)
#
class Picture < ApplicationRecord
  validates :location, :title, presence: true

  validate :ensure_photo

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User
\
  has_one_attached :photo

  has_many :pictures_to_galleries,
    primary_key: :id,
    foreign_key: :picture_id,
    class_name: :PicturesToGallery,
    dependent: :destroy

  has_many :galleries,
    through: :pictures_to_galleries,
    source: :gallery,
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :picture_id,
    class_name: :PictureLike,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :liker,
    dependent: :destroy

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
