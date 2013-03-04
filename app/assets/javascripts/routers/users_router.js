TripList.Routers.Users = Backbone.Router.extend({
  routes: {
    "": "show"
  },

  show: function() {
    alert("Show user info!");
  }

});
