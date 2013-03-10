# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  place_id           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#  isMainPhoto        :boolean
#

class Photo < ActiveRecord::Base
  attr_accessible :image, :isMainPhoto

  has_attached_file :image, :styles => { :thumb => "300x300>" },
                             :path => 'photos/:class/:style.:extension',
                             :hash_secret => SecureRandom.base64(128) 
  validates :isMainPhoto, :inclusion => { :in => [true, false] }

end
