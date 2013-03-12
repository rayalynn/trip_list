TripList.Collections.Places = Backbone.Collection.extend({

  model: TripList.Models.Place,
  url: '/places',

  initialize: function() {
    _.bindAll(this, 'matchingTags');
  },

  placesToGo: function() {
    return this.where({ isCompleted: false });
  },

  visitedPlaces: function() {
    return this.where({ isCompleted: true });
  },

  matchingTags: function(tag) {
    var results = new TripList.Collections.Places; 
    this.each(function(someTag) {
      var tag_list = someTag.get('tag_list');
      if (_.contains(tag_list, tag)) {
        results.add(someTag);
        console.log("Found");
      }
    });
    return results;
  }

});
