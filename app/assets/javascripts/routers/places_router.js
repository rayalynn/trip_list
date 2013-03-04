TripList.Routers.Places = Backbone.Router.extend({
  initialize: function(collection) {
    this.collection = collection;
    console.log("Places router called");
  },

  routes: {
    "": "index"
  },

  index: function() {
    debugger;
    var view = new TripList.Views.PlacesIndex({ collection: this.collection });
  }

});
