# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#  user_id     :bigint
#
# Indexes
#
#  index_follows_on_user_id_and_followee_id  (user_id,followee_id) UNIQUE
#
class Follow < ApplicationRecord
  validates :user_id, uniqueness: { scope: :followee_id }

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User

  belongs_to :follower,
    foreign_key: :user_id,
    class_name: :User
end
