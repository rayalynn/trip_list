TripList.Routers.Places = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.user = options.user;
    console.log("Places router called");
  },

  routes: {
    "": "index"
  },

  index: function() {
    console.log("Creating new view from router");
    var view = new TripList.Views.PlacesIndex( {collection: this.collection, user: this.user} );
  }

});

