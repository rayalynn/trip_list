require 'spec_helper'

describe "User Pages", :js => true do
  subject { page }

  describe "the signup process", :type => :feature do
    let(:user) { FactoryGirl.build(:user) }
    before { sign_up(user) }

    it { should have_selector('h5', :text =>  user.first_name) }

    it "should be redirect to a URL with a vanity username" do
      uri = URI.parse(current_url)
      "#{uri.path}".should == "/" + user.username
    end

  end

  describe "the signup process with invalid user", :type => "feature" do
    let(:invalid_user) { FactoryGirl.build(:invalid_user) }
    before { sign_up(invalid_user) }
    it { should have_selector('#error_explanation', :text => "First name is too short") }
    it { should have_selector('#error_explanation', :text => "Email is invalid") }
    it { should have_selector('#error_explanation', :text => "Last name is too short") }
  end

  describe "logging in" do
    let(:user) { FactoryGirl.create(:user) }
    before { login(user) }
    it { should have_selector('h5', 'Barney') }

  end

  describe "visiting a user's page" do
    let(:user) { FactoryGirl.create(:user) }

    it "should be accessible even if the username is capitalized" do
      visit '/' + user.username.upcase
      page.should have_selector('h5', :text => user.first_name)
    end

    it "should have an avatar if no picture is uploaded" do
      visit '/' + user.username
      find(:xpath, "//img[@class='profile-pic']").should be_true
    end
  end
end
