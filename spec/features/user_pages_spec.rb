require 'spec_helper'

describe "User Pages" do
  subject { page }

  describe "the signup process", :type => :feature do
    let(:user) { FactoryGirl.build(:user) }
    before { sign_up(user) }

    #Redirect to main page for now
    it { should have_selector('h3', :text => 'Tour') }
  end
end
