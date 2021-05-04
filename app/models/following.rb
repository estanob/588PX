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
#  index_followings_on_followed_user_id  (followed_user_id)
#  index_followings_on_user_id           (user_id)
#
class Following < ApplicationRecord
  validates :user_id, uniqueness: { scope: :followed_user_id }

  belongs_to :following,
    foreign_key: :followed_user_id,
    class_name: :User
    
  belongs_to :follower,
    foreign_key: user_id,
    class_name: :User
end
