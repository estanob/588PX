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
#  index_follows_on_followee_id              (followee_id) UNIQUE
#  index_follows_on_user_id                  (user_id) UNIQUE
#  index_follows_on_user_id_and_followee_id  (user_id,followee_id) UNIQUE
#
class Follow < ApplicationRecord
end
