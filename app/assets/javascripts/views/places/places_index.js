TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.container-fluid', 

  initialize: function() {
    _.bindAll(this, 'render');
    console.log("In places view");
    this.render();
  },

  render: function() {
    $(this.el).append("Backbone loaded in Places view");
    return this; 
  }

});
