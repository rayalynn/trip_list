require 'spec_helper'

describe "User Pages" do
  subject { page }

  describe "the signup process", :type => :feature do
    let(:user) { FactoryGirl.build(:user) }
    before { sign_up(user) }

    it { should have_selector('h3', :text => 'Hi ' + user.first_name) }

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
    before do
      visit login_path
      fill_in "Email",    :with => user.email
      fill_in "Password", :with => user.password
      click_button "Sign in"
      save_and_open_page
    end

    it { should have_selector('h3', 'Hi Barney') }

  end
end
