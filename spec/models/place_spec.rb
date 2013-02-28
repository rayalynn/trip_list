# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  title      :text
#  headline   :text
#  notes      :text
#  photo_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'spec_helper'

describe Place do
  let(:user) { FactoryGirl.create(:user) }
  before { @place = user.places.build(title: "Barcelona", headline: "Awesome City",
            notes: "Wikipedia says Barcelona is the capital of Catalonia
              and the second largest city in Spain, after Madrid, with a
              population of 1,621,537 within its administrative limits on
              a land area of 101.4 km",
           )}

  subject { @place }

  it { should respond_to(:headline) }
  it { should respond_to(:title) }
  it { should respond_to(:notes) }
  it { should belong_to(:user) }

  describe "when title is blank" do
    before { @place.title = "" }
    it { should_not be_valid }
  end

  describe "when title is too short" do
    before { @place.title = "BA" }
    it { should_not be_valid }
  end

  describe "when title is too long" do
    before { @place.title = "a" * 51 }
    it { should_not be_valid }
  end

  describe "when headline is too long" do
    before { @place.headline = "a" * 75 }
    it { should_not be_valid }
  end

  describe "when headline is empty" do
    before { @place.headline = "" }
    it { should be_valid }
  end

  describe "when notes field is empty" do
    before { @place.notes = "" }
    it { should be_valid }
  end

  describe "user ID can't be empty" do
    before { @place.user_id = nil }
    it { should_not be_valid }
  end

end
