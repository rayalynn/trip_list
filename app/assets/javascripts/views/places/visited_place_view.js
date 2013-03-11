TripList.Views.VisitedPlaceView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/visited_place'],
  className: 'main-box',

  events: {
    'click .photo-box': 'getDetails',
    'click .photo-title': 'getDetails'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'getDetails');
    this.model.on('change', this.render, this);
  },

  render: function() {
    return this.$el.append(this.template(this.model));
  },

  update: function() {
    console.log("updating model.", this.model);
    this.model.save({ isCompleted: !(this.model.get('isCompleted'))});
    this.removeFromScreen();
  },

  getDetails: function() {
    TripList.vent.trigger('showDetailedItem', this.model);
  }

});
