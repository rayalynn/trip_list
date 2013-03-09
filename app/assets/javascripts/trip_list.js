window.TripList = new Backbone.Marionette.Application();
_.extend(TripList, {
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {},
  Layouts: {},
  Views: {}
});

TripList.addRegions({
  mainRegion: '.main_app',
  headerRegion: '.header'
});

TripList.addInitializer(function(data) {
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);

  //show header
  var headerView = new TripList.Views.Header();
  TripList.headerRegion.show(headerView);

  //Show main view
  //var mainView = new TripList.Views.PlacesIndex({collection: this.collection, user: this.user}); 
  //TripList.mainRegion.show(mainView);
  //new TripList.Routers.Places({ collection: places, user: user });

  //if (!Backbone.history.started) {
    //Backbone.history.start();
    //Backbone.history.started = true;
  //}

});
