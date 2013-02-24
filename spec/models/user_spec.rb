require 'spec_helper'

describe User do

  before { @user = User.new(first_name: "Bob", last_name: "Smith", email: "bobsmith@testmail.com") };
  subject { @user }

  it { should respond_to(:first_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:email) }
  it { should respond_to(:samson) }

end
