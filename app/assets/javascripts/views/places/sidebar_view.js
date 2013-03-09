TripList.Views.Sidebar = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/sidebar'],

  render: function() {
    this.$el.append(this.template(this.model));
  }
});

