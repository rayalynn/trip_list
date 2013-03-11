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
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);
  var layout = new TripList.Layouts.AppLayout({model: user, collections: places});

  layout.render();

  TripList.vent.on("changeToVisitedPage", function(){
    console.log("Changing to visited places");
    TripList.vent.trigger('showVisitedPlaces', TripList.Views.Places);
  });

  TripList.vent.on("changeToPlacesToVisit", function() {
    console.log("Change to places to visit in initializer");
    TripList.vent.trigger('showPlacesToVisit', TripList.Views.Places);
  });
  
  TripList.vent.on("addNewPlace", function() {
    console.log("Add new place triggered");
    var placeForm = new TripList.Views.NewPlace();
    layout.main.show(placeForm);
  });

});
