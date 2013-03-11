TripList.Views.Sidebar = Backbone.Marionette.ItemView.extend({

  el: '.sidebar',

  template: 'places/sidebar',

  events: {
    'click .visited': 'changeToVisitedPage',
    'click .toVisit': 'changeToPlacesToVisitPage',
    'click .addNewPlace': 'addNewPlace'
  },

  changeToVisitedPage: function() {
    console.log("Change to visited page triggered");
    TripList.vent.trigger('changeToVisitedPage');
  },
  
  changeToPlacesToVisitPage: function() {
    TripList.vent.trigger('changeToPlacesToVisit');
  },

  addNewPlace: function() {
    TripList.vent.trigger('addNewPlace');
  }
});

