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
require 'test_helper'

class PictureLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
