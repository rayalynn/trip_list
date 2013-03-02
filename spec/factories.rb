FactoryGirl.define do
  factory :user do
    first_name "John"
    last_name "Smith"
    email      "johnsmith@wondertest.com"
    username  "johnsmith" 
    password "somepass"
    password_confirmation "somepass"
  end

  factory :invalid_user, :class => 'User' do
    first_name "J"
    last_name "S"
    email      "johnsmith!wondertest.com"
    username  "john" 
    password "somepass"
    password_confirmation "pass"
  end


  factory :place do
    title "Visit the Statue in Italy"
    headline "Try and climb to the top"
  end
end
