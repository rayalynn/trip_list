# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string(255)
#  last_name           :string(255)
#  email               :string(255)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  username            :string(255)
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  attr_accessible :email,  :first_name, :last_name, :username, :avatar
  has_many :places, :dependent => :destroy

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
