TripList.Router = Backbone.Marionette.AppRouter.extend({
  // "someMethod" must exist at controller.someMethod
  appRoutes: {
    "#addPlace" : "showPlaceForm"
  },

  /* standard routes can be mixed with appRoutes/Controllers above */
  routes : {
    "some/otherRoute" : "someOtherMethod"
  },

});

appController = {
  showPlaceForm: function() {
    console.log("Show place form");
  }

};
Backbone.Marionette.AppRouter.extend({
  controller: appController
});
