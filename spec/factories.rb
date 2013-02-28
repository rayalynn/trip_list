FactoryGirl.define do
  factory :user do
    first_name "John"
    last_name "Smith"
    email      "johnsmith@wondertest.com"
    username  "johnsmith" 
  end

  factory :place do
    title "Visit the Statue in Italy"
    headline "Try and climb to the top"
  end
end
