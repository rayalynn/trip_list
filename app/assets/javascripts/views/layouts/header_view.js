TripList.Views.Header = Backbone.Marionette.ItemView.extend({

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

