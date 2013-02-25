require 'spec_helper'

describe User do

  before { @user = User.new(first_name: "Bob", last_name: "Smith",
                     email: "bobsmith@testmail.com",
                     username: "myusername") };
  subject { @user }

  it { should respond_to(:first_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:email) }
  it { should respond_to(:username) }
  it { should respond_to(:avatar_file_name) }

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

  describe "email address format" do
    it "should be invalid" do
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

  describe "when email address is already taken" do
    before do
      same_email_user = @user.dup
      same_email_user.save
    end

    it { should_not be_valid }
  end

  describe "when username is too long" do
    before { @user.username = "a" * 21 }

    it { should_not be_valid }
  end

  describe "when username is too short" do
    before { @user.username = "a" * 2 }

    it { should_not be_valid }
  end

  describe "Avatars" do
    describe "uploading and retrieving pictures" do
      it "should be able to upload to the cloud" do
        pending
      end

      it "should be retrievable from the cloud" do
        pending
      end

      it "should be able to get back the regular image" do
        pending
      end

      it "should be able to get a thumbnail image back" do
        pending
      end
    end 

    describe "Invalid pictures" do
      it "should return an error message if the file is not a picture" do
        pending
      end
    end

  end

end
