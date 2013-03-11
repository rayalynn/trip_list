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

  //load initial data
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);

  var layout = new TripList.Layouts.AppLayout({model: user, collections: places});
  layout.render();

  //Events
  TripList.vent.on("showVisitedPage", function(){
    console.log("Event catch in main showVisitedPage");
    TripList.vent.trigger('showVisitedPlaces', TripList.Views.Places);
  });

  TripList.vent.on("showToVisitPage", function() {
    console.log("In show to visit page");
    layout.content.currentView.close();
    $('<div class="main span9"></div>').appendTo($('.app'));
    var mainView = new TripList.Views.Places({collection: places, user: user});

    layout.content.show(mainView);
  });
  
  TripList.vent.on("addNewPlace", function() {
    var placeForm = new TripList.Views.NewPlace();
    layout.main.show(placeForm);
  });

});
