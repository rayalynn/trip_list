/* todo: routes should be /user/places, not /user
 */

TripList.Routers.Places = Backbone.Marionette.AppRouter.extend({

  initialize: function(options) {
    this.collection = options.collection;
    this.user = options.user;
    this.layout = options.layout;
  },

  routes: {
    "places": "showPlaceIndex",
    "visited": "showPlaceIndex",
    "new": "addNewPlace"
  },

  //Show main places page.
  showPlaceIndex: function() {
    this.layout.content.close();
    var updatedCollection = new TripList.Collections.Places;
    var that = this;
    updatedCollection.fetch({
      success: function(results) {
        var mainView = new TripList.Views.PlacesIndex({collection: results});
        that.layout.content.show(mainView);
      }
    });
  },

  //Add a new place
  addNewPlace: function() {
    this.layout.content.close();
    var placeForm = new TripList.Views.NewPlace();
    this.layout.content.show(placeForm);
  }

});
