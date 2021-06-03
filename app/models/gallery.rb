# == Schema Information
#
# Table name: galleries
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator_id  :integer          not null
#
# Foreign Keys
#
#  fk_rails_...  (creator_id => users.id)
#
class Gallery < ApplicationRecord
  validates :title, presence: true, length: { minimum: 2, maximum: 30 }
  validates :description, length: { minimum: 5, maximum: 300 }
  
  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :pictures_to_galleries,
    primary_key: :id,
    foreign_key: :gallery_id,
    class_name: :PicturesToGallery,
    dependent: :destroy

  has_many :pictures,
    through: :pictures_to_galleries,
    source: :picture, 
    dependent: :destroy
end
