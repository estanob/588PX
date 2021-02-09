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
#  index_pictures_on_uploader_id  (uploader_id)
#
# Foreign Keys
#
#  fk_rails_...  (uploader_id => users.id)
#
require 'test_helper'

class PictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
