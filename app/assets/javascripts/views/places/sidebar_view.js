TripList.Views.Sidebar = Backbone.View.extend({
  el: '.sidebar',
  events: {
    'click .visited-link': 'changeToVisitedPage',
    'click .toVisit-link': 'changeToPlacesToVisitPage'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'changeToVisitedPage');
  },

  template: JST['places/sidebar'],

  render: function() {
    this.$el.append(this.template(this.model));
  },
  
  //Let event mgr know to change page
  changeToVisitedPage: function() {
    TripList.vent.trigger('changeToVisitedPage');
  },
  
  changeToPlacesToVisitPage: function() {
    TripList.vent.trigger('changeToPlacesToVisit');
  }
});

