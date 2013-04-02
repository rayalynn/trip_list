Trip List is a photographical TODO list to keep track of the places you want
to visit in your life. The app was built using Rails, Backbone, Marionette,
and Masonry.

A demo is available [here](http://triplist.heroku.com).
username/password: demo@testing.com/demodemo

**Version .01** - Alpha

##Current functionality:
* User signup and authentication
* Places can be added with notes and a location.
* Places can be marked as completed.
* A picture will automatically be downloaded for a place once it's added.
* Places can be tagged.

##Installation:
Clone the directory and startup the rails server:

     git clone git@github.com:rayalynn/trip_list.git
     bundle exec install
     rails s

###Setup the database
Install the postgres database if it's not already on your machine.
For Mac OSX users, I recommend using either [homebrew](http://mxcl.github.com/homebrew/)
or the [Postgres App](http://postgresapp.com/).

Configure the database using the settings in:

     config/database.yml

Once that is setup, run the Rails migrations inside of the app directory:

     rake:db:migrate

###AWS Setup
AWS is used to host the app's images. Setup the following environment
variables with your own credentials:

     AWS_BUCKET
     AWS_ACCESS_KEY_ID
     AWS_SECRET_ACCESS_KEY
