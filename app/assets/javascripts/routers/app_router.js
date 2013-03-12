TripList.Routers.Places = Backbone.Marionette.AppRouter.extend({

  initialize: function(options) {
    this.collection = options.collection;
    this.user = options.user;
    console.log("Places router called");
  },

  routes: {
    "": "loadPlaceIndex",
    "new": "addNewPlace"
  },

  loadIndex: function() {
    console.log("Loading router:index");
  }

});
