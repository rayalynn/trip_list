TripList.Collections.Places = Backbone.Collection.extend({

  model: TripList.Models.Place,
  url: '/places',

  remainingPlaces: function() {
    debugger;
    return this.where({ isCompleted: false });
  },

  completedPlaces: function() {
    return this.where({ isCompleted: true });
  }


});
