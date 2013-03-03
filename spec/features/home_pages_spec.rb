require 'spec_helper'

describe "Home Page" do
  subject { page }

  before { visit root_path }
   
  it { should have_selector('h1', :text => 'Trip List') }
  it { should have_selector('h3', :text => 'Tour'     ) }

  describe "Non logged in user" do
    it { should have_link("Sign Up", href: signup_path) }
    it { should have_link("Log In", href: login_path) }
  end

end
