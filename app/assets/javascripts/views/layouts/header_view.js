TripList.Views.Header = Backbone.Marionette.ItemView.extend({

  el: '.header',

  template: 'layouts/header',

  events: {
    'click .logoutBtn': 'logoutUser',
    'click .brand'    : 'redirectHome'
  },

  logoutUser: function() {
  },

  redirectHome: function() {
    TripList.vent.trigger('showToVisitPage');
  }

});

