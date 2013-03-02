# ClientSideValidations Initializer

# Uncomment to disable uniqueness validator, possible security issue
# ClientSideValidations::Config.disabled_validators = [:uniqueness]

# Uncomment to validate number format with current I18n locale
# ClientSideValidations::Config.number_format_with_locale = true

# Uncomment the following block if you want each input field to have the validation messages attached.
 ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  describe "when email field doesn't match email confirmation field" do
    before do
      @user.email = "test@test.com"
      @user.email_confirmation = "different@test.com"
    end
    it { should_not be_valid }
  end

   unless html_tag =~ /^<label/
     %{<div class="field_with_errors">#{html_tag}<label for="#{instance.send(:tag_id)}" class="message">#{instance.error_message.first}</label></div>}.html_safe
   else
     %{<div class="field_with_errors">#{html_tag}</div>}.html_safe
   end
 end

