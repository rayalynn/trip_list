TripList.Views.PlaceItemView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/place'],
  className: 'main-box',

  events: {
    'change input': 'update',
    'click .photo-box': 'getDetails',
    'click .photo-title': 'getDetails',
    'click .tag':   'showTagPage'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'removeFromScreen', 'getDetails');
    this.model.on('change', this.render, this);
  },

  render: function() {
    return this.$el.append(this.template(this.model));
  },

  removeFromScreen: function() {
    if (this.model.get('isCompleted')) {
      console.log("Removing model from screen");
      this.$el.fadeOut();
      TripList.vent.trigger("redrawPage");
    }
  },

  update: function() {
    console.log("updating model.", this.model);
    var cur_date = new Date();
    this.model.save({ isCompleted: !(this.model.get('isCompleted'))});
    this.model.save({ completionDate: cur_date});
    this.removeFromScreen();
  },

  getDetails: function() {
    TripList.vent.trigger('showDetailedItem', this.model);
  },

  showTagPage: function(evt) {
    var clickedTag = evt.currentTarget.innerText;
    TripList.vent.trigger('showTagPage', clickedTag);
  }

});
