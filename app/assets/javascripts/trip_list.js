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
  headerRegion: '.header',
  sidebarRegion: '.sidebar'
});

//Allow Marionette to use JST templates
Backbone.Marionette.Renderer.render = function(template, data){
  if (!JST[template]) throw "Template '" + template + "' not found!";
  return JST[template](data);
};

//TripList initializer
TripList.addInitializer(function(data) {
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);

  debugger;
  var layout = new TripList.Layouts.AppLayout();
  layout.render();
  //layout.header.show(new TripList.Views.Header());
  //show header
  //var headerView = new TripList.Views.Header();
  //TripList.headerRegion.show(headerView);

  //show sidebar
  //var sidebarView = new TripList.Views.Sidebar({model: user});
  //TripList.sidebarRegion.show(sidebarView);

  //Show main view
  //var mainView = new TripList.Views.PlacesIndex({collection: places, user: user}); 
  //TripList.mainRegion.show(mainView);
  //new TripList.Routers.Places({ collection: places, user: user });

  //if (!Backbone.history.started) {
    //Backbone.history.start();
    //Backbone.history.started = true;
  //}

});
