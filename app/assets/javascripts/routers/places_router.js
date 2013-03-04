TripList.Routers.Places = Backbone.Router.extend({
  initialize: function(collection) {
    this.collection = collection;
    console.log("Places router called");
  },

  routes: {
    "": "index"
  },

  index: function() {
    console.log("Creating new view from router");
    var view = new TripList.Views.PlacesIndex( this.collection );
  }

});
