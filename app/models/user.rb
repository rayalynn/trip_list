# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  first_name             :string(255)
#  last_name              :string(255)
#  email                  :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string(255)
#  avatar_file_name       :string(255)
#  avatar_content_type    :string(255)
#  avatar_file_size       :integer
#  avatar_updated_at      :datetime
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  extend FriendlyId
  friendly_id :username

  attr_accessible :email, :password, :password_confirmation, :remember_me,
    :first_name, :last_name, :username, :avatar
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  has_many :places, :dependent => :destroy

  before_save { |user| user.username = username.downcase }

  has_attached_file :avatar, :styles => { :thumb => "100x100>" },
                             :path => 'photos/:class/:style.:extension',
                             :hash_secret => SecureRandom.base64(128)

  validates :first_name,   :length => { :in => 2..50 },
                           :format => { :with => /^[a-zA-Z]+$/,
                             :message => "Only letters are allowed" }
  validates :last_name,    :length => { :in => 2..50 },
                           :format => { :with => /^[a-zA-Z]+$/,
                             :message => "Only letters are allowed" }
  validates :email,        :format => { :with => VALID_EMAIL_REGEX },
                           :uniqueness => { :case_sensitive => false }
  validates :username,     :length => { :in => 3..20 },
                           :uniqueness => { :case_sensitive => false }

end
