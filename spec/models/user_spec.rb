require 'spec_helper'

describe User do

  before { @user = User.new(first_name: "Bob", last_name: "Smith", email: "bobsmith@testmail.com") };
  subject { @user }

  it { should respond_to(:first_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:email) }
  it { should respond_to(:username) }

  describe "when first name is too short" do
    before { @user.first_name = "a" }
    it { should_not be_valid }
  end

  describe "when first name is too long" do
    before { @user.first_name = "a" * 51 }
    it { should_not be_valid }
  end

  describe "when last name is too short" do
    before { @user.last_name = "b" }
    it { should_not be_valid }
  end

  describe "when last name is too long" do
    before { @user.last_name = "b" * 51 }
    it { should_not be_valid }
  end

  describe "first name with invalid characters" do
    it "should not be invalid" do
      names = %w[S13BA Samanth$a Giml1]
      names.each do |invalid_name|
        @user.first_name = invalid_name
        @user.should_not be_valid
      end
    end
  end

  describe "last name with invalid characters" do
    it "should not be valid" do
      names = %w[S13BA S0rkin Bro!tus]
      names.each do |invalid_name|
        @user.last_name = invalid_name
        @user.should_not be_valid
      end
    end
  end

  describe "email address" do
    it "should  be invalid" do
      addresses = %w[usr@foo,com user@foo example.user@foo.]
      addresses.each do |invalid_address|
        @user.email = invalid_address
        @user.should_not be_valid
      end
    end

    it "should be valid" do
      addresses = %w[ser@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
      addresses.each do |valid_address|
        @user.email = valid_address
        @user.should be_valid
      end
    end
  end
  #first_name: min 2 chars, max: 50 - letters
  #last_name: min 2 chars, max:50 - letters
  #username: min 3 chars, max:20 - letters, numbers, unique
  #email: use regex, unique
  #
  #presence?
  #Error messages return JSON data?

end
