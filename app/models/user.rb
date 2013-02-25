class User < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  attr_accessible :email,  :first_name, :last_name, :username

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
