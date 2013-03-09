window.TripList = new Backbone.Marionette.Application();
_.extend(TripList, {
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {},
  Layouts: {},
  Views: {}
});

TripList.addInitializer(function(data) {
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);
  new TripList.Routers.Places({ collection: places, user: user });

  if (!Backbone.history.started) {
    Backbone.history.start();
    Backbone.history.started = true;
  }

});
