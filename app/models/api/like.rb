# == Schema Information
#
# Table name: api_likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  liker_id   :integer          not null
#  post_id    :integer          not null
#
class Api::Like < ApplicationRecord
end
