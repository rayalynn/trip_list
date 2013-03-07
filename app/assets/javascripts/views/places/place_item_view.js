TripList.Views.PlaceItemView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/checkboxList'],
  tagName: 'li',

  events: {
    'change input': 'update'
  },

  initialize: function() {
    console.log("New placeItem view created");
    this.model.on('change', this.render, this);
  },

  onRender: function() {
    console.log("On render called");
    if (this.model.get('isCompleted')) {
      console.log("Removing model from screen");
      this.$el.fadeOut();
    }
  },

  update: function() {
    console.log(this.model.get('title'));
    this.model.save({ isCompleted: !(this.model.get('isCompleted')) });
    console.log("changed to ");
    console.log(this.model.get('isCompleted'));
  }

});
