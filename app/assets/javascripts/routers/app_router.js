TripList.Routers.Places = Backbone.Marionette.AppRouter.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.user = options.user;
    console.log("Places router called");
  },

  routes: {
    "": "index",
    "visited": "visited"
  },

  index: function() {
    console.log("in index");
  },

  visited: function() {
    console.log("Show visited places");
  }
});

