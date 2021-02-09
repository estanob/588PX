# == Schema Information
#
# Table name: galleries
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  creator_id :integer          not null
#
# Indexes
#
#  index_galleries_on_creator_id  (creator_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (creator_id => users.id)
#
class Gallery < ApplicationRecord
end
