TripList.Views.PlaceItemView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/place'],
  className: 'span4 photo-box-layout',

  events: {
    'change input.place-checkbox': 'update'
  },

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  onRender: function() {
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
