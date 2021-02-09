# == Schema Information
#
# Table name: pictures
#
#  id          :bigint           not null, primary key
#  caption     :string
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  uploader_id :integer          not null
#
# Indexes
#
#  index_pictures_on_uploader_id  (uploader_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (uploader_id => users.id)
#
class Picture < ApplicationRecord
  validates :location, presence: true
  validates :uploader_id, uniqueness: true

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User
end
