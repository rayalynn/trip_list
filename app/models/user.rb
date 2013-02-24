class User < ActiveRecord::Base
  attr_accessible :email,  :first_name, :last_name
  validates :first_name,   :length => { :in => 2..50 },
                           :format => { :with => /^[a-zA-Z]+$/,
                             :message => "Only letters are allowed" }
  validates :last_name,    :length => { :in => 2..50 },
                           :format => { :with => /^[a-zA-Z]+$/,
                             :message => "Only letters are allowed" }
end
