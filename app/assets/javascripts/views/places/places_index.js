TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: $('.container'),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    $(this.el).append("Backbone loaded in Places view");
    return this; 
  }

});
