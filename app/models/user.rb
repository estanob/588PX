# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :pictures,
    foreign_key: :uploader_id,
    class_name: :Picture,
    dependent: :destroy

  has_many :galleries,
    foreign_key: :creator_id,
    class_name: :Gallery,
    dependent: :destroy

  has_many :outward_follows,
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :inward_follows,
    foreign_key: :followee_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followees,
    through: :outward_follows,
    source: :followee,
    dependent: :destroy

  has_many :followers,
    through: :inward_follows,
    source: :follower,
    dependent: :destroy

  
    
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64(64)
  end
end
