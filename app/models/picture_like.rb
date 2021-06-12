# == Schema Information
#
# Table name: picture_likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liker_id   :bigint           not null
#  picture_id :integer          not null
#
# Indexes
#
#  index_picture_likes_on_liker_id_and_picture_id  (liker_id,picture_id) UNIQUE
#
class PictureLike < ApplicationRecord
  validates :liker_id, uniqueness: { scope: :picture_id }

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :picture,
    foreign_key: :picture_id,
    class_name: :Picture
end
