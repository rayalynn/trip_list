TripList.Views.Sidebar = Backbone.Marionette.ItemView.extend({

  el: '.sidebar',

  template: 'layouts/sidebar',

  events: {
    'click .visited': 'showVisitedPage',
    'click .toVisit': 'showToVisitPage',
    'click .addNewPlace': 'addNewPlace'
  },

  showVisitedPage: function() {
    TripList.vent.trigger('showVisitedPage');
  },
  
  showToVisitPage: function() {
    TripList.vent.trigger('showToVisitPage');
  },

  addNewPlace: function() {
    TripList.vent.trigger('addNewPlace');
  }
});


