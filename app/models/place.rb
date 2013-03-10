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
  attr_accessible :headline, :notes, :photo_id, :title,
                  :isCompleted, :completionDate
  belongs_to :user
  has_many :photos, :dependent => :destroy
  after_create :download_default_image

  validates :title,    :length => { :in => 3..40 }
  validates :headline, :length => { :maximum => 70 }
  validates :user,     :presence => true

  def download_default_image
    path = 'http://' + self.title + '.jpg.to'

    doc = Nokogiri::HTML(open(path))
    image_path = ""
    doc.css('img').each do |img|
      image_path = img['src']
    end

    logger.debug "Attempting to build photo with " + image_path
    photo = self.photos.build();
    photo.image = URI.parse(image_path)
    photo.isMainPhoto = true
    photo.save()
  end
end
