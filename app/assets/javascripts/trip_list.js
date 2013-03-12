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
  PlacesRouter = new TripList.Routers.Places({
    data: data,
    layout: layout
  });

  //Events
  //TripList.vent.on("showVisitedPage", function(){
    //layout.content.currentView.close();
    //$('<div class="main span9"></div>').appendTo($('.app'));
    //var updatedCollection = new TripList.Collections.Places;
    //updatedCollection.fetch({
      //success: function(results) {
        //var mainView = new TripList.Views.VisitedPlaces({collection: results, user: user});
        //layout.content.show(mainView);
        //TripList.vent.trigger('setVisitedActive', TripList.Views.Sidebar);
      //}
    //});
  //});

  //TripList.vent.on("showToVisitPage", function() {
    //console.log("Showing places to visit");
    //layout.content.currentView.close();
    //$('<div class="main span9"></div>').appendTo($('.app'));
    //var updatedCollection = new TripList.Collections.Places;
    //updatedCollection.fetch({
      //success: function(results) {
        //var mainView = new TripList.Views.UnvisitedPlaces({collection: results, user: user});
        //layout.content.show(mainView);
        //TripList.vent.trigger('setToVisitActive', TripList.Views.Sidebar);
      //}
    //});
  //});
  
  //TripList.vent.on("showDetailedItem", function(curItem) {
    //layout.content.currentView.close();
    //$('<div class="main span9"></div>').appendTo($('.app'));
    //var itemDetails = new TripList.Views.DetailedItemView({model: curItem});
    //layout.content.show(itemDetails);
  //});

  //TripList.vent.on("showTagPage", function(tag) {
    //console.log("Show Tag event page loaded");
    //layout.content.currentView.close();
    //$('<div class="main span9"></div>').appendTo($('.app'));
    //var tagged = new TripList.Views.TaggedPlaces({collection: places, tag: tag});
    //layout.content.show(tagged);
  //});

});

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
