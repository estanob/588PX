# == Schema Information
#
# Table name: followings
#
#  id               :bigint           not null, primary key
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  followed_user_id :integer          not null
#  user_id          :bigint
#
# Indexes
#
#  index_followings_on_followed_user_id              (followed_user_id)
#  index_followings_on_user_id                       (user_id)
#  index_followings_on_user_id_and_followed_user_id  (user_id,followed_user_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require 'test_helper'

class FollowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
