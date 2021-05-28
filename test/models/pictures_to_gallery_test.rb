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
require 'test_helper'

class PicturesToGalleryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
