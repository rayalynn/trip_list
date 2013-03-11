# == Schema Information
#
# Table name: places
#
#  id             :integer          not null, primary key
#  title          :text
#  headline       :text
#  notes          :text
#  photo_id       :integer
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  isCompleted    :boolean
#  completionDate :datetime
#
require 'open-uri'
require 'nokogiri'

class Place < ActiveRecord::Base
  attr_accessible :headline, :notes, :photo, :title,
                  :isCompleted, :completionDate
  belongs_to :user
  after_create :download_default_image

  has_attached_file :photo, :styles => { :thumb => "300x300" },
                            :path => 'photos/:class/:hash_:style.:extension',
                            :hash_secret => 'anything'


  validates :title,    :length => { :in => 3..40 }
  validates :headline, :length => { :maximum => 70 }
  validates :user,     :presence => true

  def download_default_image
    url_title = self.title.gsub(/\s+/, "")
    path = 'http://' + url_title + '.jpg.to'

    doc = Nokogiri::HTML(open(path))
    image_path = ""
    doc.css('img').each do |img|
      image_path = img['src']
    end

    logger.debug "\n\n--------\n\n"
    logger.debug "Saving #{self.title} at #{image_path}"
    self.photo = URI.parse(image_path)
    self.save()
  end
end
