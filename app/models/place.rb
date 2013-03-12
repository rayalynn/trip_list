# == Schema Information
#
# Table name: places
#
#  id                 :integer          not null, primary key
#  title              :text
#  headline           :text
#  notes              :text
#  user_id            :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  isCompleted        :boolean          default(FALSE)
#  completionDate     :datetime
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#  location           :text
#

require 'open-uri'
require 'nokogiri'

class Place < ActiveRecord::Base
  attr_accessible :headline, :notes, :photo, :title,
                  :isCompleted, :completionDate, :location
  belongs_to :user
  after_create :download_default_image

  has_attached_file :photo, :styles => { :thumb => "300x300" },
                            :path => 'photos/:class/:hash_:style.:extension',
                            :hash_secret => 'anything'

  validates :title,    :length => { :in => 3..40 }
  validates :headline, :length => { :maximum => 70 }
  validates :user,     :presence => true
  validates :location, :presence => true

  def download_default_image
    new_url = self.location.gsub(/(\s+|\W+)/, "")
    path = 'http://' + new_url + '.jpg.to'

    doc = Nokogiri::HTML(open(path))
    image_path = ""
    doc.css('img').each do |img|
      image_path = img['src']
    end

    logger.debug "\n\n--------\n\n"
    logger.debug "Saving #{self.location} at #{image_path}"
    self.photo = URI.parse(image_path)
    self.save()
  end
end
