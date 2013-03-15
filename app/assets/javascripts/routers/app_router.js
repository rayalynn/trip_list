/* todo: routes should be /user/places, not /user
 */

TripList.Routers.Places = Backbone.Marionette.AppRouter.extend({

  initialize: function(options) {
    this.collection = options.data.places;
    this.user = options.data.user;
    this.layout = options.layout;
  },

  routes: {
    "tagged/:tagname": "showPlaceIndex",
    "places": "showPlaceIndex",
    "visited": "showPlaceIndex",
    "new": "addNewPlace",
    "places/:id" : "showBigPlace",
    "/": "showPlaceIndex",
    '': "showPlaceIndex"
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
    //var updatedCollection = new TripList.Collections.Places(this.collection);
    //updatedCollection.update(this.collection);
    //var mainView = new TripList.Views.PlacesIndex({collection: updatedCollection});
    //var mainView = new TripList.Views.PlacesIndex({collection: this.collection});
    //this.layout.content.show(mainView);
    //updatedCollection.update({
      //success: function(results) {
        //debugger;
        //var mainView = new TripList.Views.PlacesIndex({collection: results});
        //that.layout.content.show(mainView);
      //}
    //});
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
    var place = new TripList.Models.Place;
    var that = this;
    place.fetch({
      url: '/places/' + id,
      success: function(result) {
        var mainView = new TripList.Views.SingleItemBigView({ model: result });
        that.layout.content.show(mainView);
      }
    });
  },

});
