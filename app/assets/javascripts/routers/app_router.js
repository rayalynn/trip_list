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
    "new": "addNewPlace",
    "places/:id": "showBigPlace",
    "unvisited/tagged": "showTaggedUnvisited"
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
  },

  //TODO - implement on 
  //http://lostechies.com/derickbailey/2011/08/28/dont-execute-a-backbone-js-route-handler-from-your-code/
  showBigPlace: function(id) {
    console.log("Show big place view");
    //var place = this.place.get(id);
    //debugger;
    //this.layout.content.close();
    //var mainView = new TripList.Views.SingleItemBigView({model: model});
    //that.layout.content.show(mainView);
    //debugger;
  },

  showTaggedUnvisited: function() {

  }

});
