TripList.Views.Sidebar = Backbone.Marionette.ItemView.extend({

  el: '.sidebar',

  template: 'layouts/sidebar',

  initialize: function() {
    TripList.vent.on('setVisitedActive', this.setVisitedActive);
    TripList.vent.on('setToVisitActive', this.setToVisitActive);
  },

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
  },

  setVisitedActive: function() {
    console.log("Visited link active");
    $('.active').removeClass();
    $('.visited').parent().addClass('active');
  },

  setToVisitActive: function() {
    console.log("To visit link active");
    $('.active').removeClass();
    $('.toVisit').parent().addClass('active');
  }

});


