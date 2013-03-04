window.TripList = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var user = new TripList.Models.User(data.user);
    var places = new TripList.Collections.Places(data.places);
    console.log(user);
    console.log(places);
  }
};

