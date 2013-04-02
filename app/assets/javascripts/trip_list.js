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
  var layout = TripList.initAppLayout(data);
  TripList.PlacesRouter = new TripList.Routers.Places({
    data: data,
    layout: layout
  });

});

//Setup page layout
TripList.initAppLayout = function(data) {
  var user = new TripList.Models.User(data.user);
  var places = new TripList.Collections.Places(data.places);
  var layout = new TripList.Layouts.AppLayout({model: user, collections: places});
  var tags = data.tags;
  $('.container-fluid').prepend(layout.render().el);

  var headerView = new TripList.Views.Header();
  layout.header.show(headerView);
  var sidebarView = new TripList.Views.Sidebar({model: user, tags: tags});
  layout.sidebar.show(sidebarView);

  return layout;
};

//Listeners
TripList.on("initialize:after", function() {
  Backbone.history.start({
  });
});
