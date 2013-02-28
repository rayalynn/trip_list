# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  title      :text
#  headline   :text
#  notes      :text
#  photo_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'spec_helper'

describe Place do
  before { @place = Place.new(title: "Barcelona", headline: "Awesome City",
            notes: "Wikipedia says Barcelona is the capital of Catalonia
              and the second largest city in Spain, after Madrid, with a
              population of 1,621,537 within its administrative limits on
              a land area of 101.4 km") }

  subject { @place }

  it { should respond_to(:headline) }
  it { should respond_to(:title) }
  it { should respond_to(:notes) }

end
