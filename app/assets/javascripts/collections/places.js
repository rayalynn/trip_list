TripList.Collections.Places = Backbone.Collection.extend({

  model: TripList.Models.Place,
  url: '/places',

  remainingPlaces: function() {
    return this.where({ isCompleted: false });
  },

  completedPlaces: function() {
    return this.where({ isCompleted: true });
  },

  matchingTags: function(tag) {
    for (item in this.models) {
      if (_.contains(this.models[item].get('tag_list'), tag)) {
        console.log(this.models[item].get('title'));
        console.log("Item contains tag");

      }
      else {
        console.log("No match");
      }
    }
    debugger;
  }


});
