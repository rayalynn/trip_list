TripList.Views.Header = Backbone.View.extend({
  className: 'navbar',
  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/header'],

  render: function() {
    this.$el.append(this.template);
    this.delegateEvents();
  }
});
