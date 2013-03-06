TripList.Views.PlaceItemView = Backbone.View.extend({

  template: JST['places/checkboxList'],
  tagName: 'li',

  events: {
    'change input': 'update'
  },

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    $(this.el).append(this.template({ item: this.model }));
    return this; 
  },

  update: function() {
    var item = this.$('input').prop('checked');
    console.log("Update:");
    console.log(this.model.get('title'));
    console.log("is now set to ", item);
  }

});
