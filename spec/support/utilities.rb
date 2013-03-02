include ApplicationHelper

def sign_up(user)
  visit signup_path
  fill_in "First name", with: user.first_name
  fill_in "Last name",  with: user.last_name
  fill_in "Email",      with: user.email
  fill_in "Username",   with: user.username
  find('#user_password_confirmation').set 'validpassword'
  find('#user_password').set 'validpassword'
  click_button 'Submit'
end
