//Create Marionette app
window.TripList = new Backbone.Marionette.Application();
_.extend(TripList, {
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {},
  Layouts: {},
  Views: {}
});

//Allow Marionette to use JST templates
Backbone.Marionette.Renderer.render = function(template, data){
  if (!JST[template]) throw "Template '" + template + "' not found!";
  return JST[template](data);
};

//TripList initializer
TripList.addInitializer(function(data) {

  var layout = TripList.initAppLayout();
  TripList.PlacesRouter = new TripList.Routers.Places({
    data: data,
    layout: layout
  });

});

//Setup page layout
TripList.initAppLayout = function() {
  var view = new TripList.Views.PlacesIndex( {collection: this.collection, user: this.user} );
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);
  var layout = new TripList.Layouts.AppLayout({model: user, collections: places});
  layout.render();
  return layout;
};

//Listeners
TripList.on("initialize:after", function() {
  Backbone.history.start();
});
