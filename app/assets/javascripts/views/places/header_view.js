TripList.Views.Header = Backbone.View.extend({
  el: '.header',
  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/header'],

  render: function() {
    debugger;
    this.$el.append(this.template);
  }
});
