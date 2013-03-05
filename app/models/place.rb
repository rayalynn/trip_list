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

class Place < ActiveRecord::Base
  attr_accessible :headline, :notes, :photo_id, :title,
                  :isCompleted, :completionDate
  belongs_to :user
  has_many :photos, :dependent => :destroy

  validates :title,    :length => { :in => 3..40 }
  validates :headline, :length => { :maximum => 70 }
  validates :user,     :presence => true
end
