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

require 'spec_helper'
require 'pp'

describe Photo do
  let(:user) { FactoryGirl.create(:user) }
  let(:place) { FactoryGirl.create(:place) }

  before do
    testPlace = user.places.build(title: "London")
    testPlace.save
    @photo = testPlace.photos.build(isMainPhoto: false)
    @photo.image = fixture_file_upload '/images/flowers.jpg'
  end

  it { should belong_to(:place) }
  it "should save to the model" do
    @photo.should have_attached_file(:image)
  end

end
