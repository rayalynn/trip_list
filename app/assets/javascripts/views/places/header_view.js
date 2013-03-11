TripList.Views.Header = Backbone.Marionette.ItemView.extend({

  el: '.header',

  template: 'places/header',

  initialize: function() {
    _.bindAll(this, 'render');
  },

});
