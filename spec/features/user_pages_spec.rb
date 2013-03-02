require 'spec_helper'

describe "User Pages" do
  subject { page }

  describe "the signup process", :type => :feature do
    let(:user) { FactoryGirl.build(:user) }
    before { sign_up(user) }

    #Redirect to main page for now
    it { should have_selector('h3', :text => 'Tour') }
  end

  #describe "the signup process with invalid user" do
    #let(:user) { FactoryGirl.build(:invalid_user) }
    #before { sign_up(user) }
    #it { should have_selector('.error', :text => "Invalid first name" }

  #end
end
