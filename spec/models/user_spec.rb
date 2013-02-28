# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string(255)
#  last_name           :string(255)
#  email               :string(255)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  username            :string(255)
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string(255)
#  last_name           :string(255)
#  email               :string(255)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  username            :string(255)
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#
include ActionDispatch::TestProcess
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
  it { should have_many(:places) }

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
    describe "uploading and retrieving valid pictures" do
      before { @user.avatar = fixture_file_upload '/images/flowers.jpg' }

      it "should save to the model" do
        @user.should have_attached_file(:avatar)
      end

      it "should have a URL with the original image" do
        @user.avatar.url.should match(/s3.amazonaws.com/)
      end

      it "should have a thumbnail URL" do
        @user.avatar.url(:thumb).should match(/thumb/)
      end

      it "should be able to upload to the cloud" do
        pending
      end

      it "should be retrievable from the cloud" do
        pending
      end
    end 
  end
end
