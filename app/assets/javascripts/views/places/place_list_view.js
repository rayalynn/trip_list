TripList.Views.PlaceListView = Backbone.View.extend({

  template: JST['places/checkboxList'],
  tagName: 'li',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    $(this.el).append(this.template({ item: this.model }));
    return this; 
  }

});
