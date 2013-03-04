TripList.Routers.Users = Backbone.Router.extend({
  initialize: function(collection, user) {
    this.collection = collection;
    this.user = user;
    console.log("User router called");
  },

  routes: {
    "": "index"
  },

  index: function() {
    var view = new TripList.Views.UserIndex({ collection: this.collection, user: this.user });
  }

});
