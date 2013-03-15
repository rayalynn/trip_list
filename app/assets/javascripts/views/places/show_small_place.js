TripList.Views.SmallPlaceView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/small_place'],
  className: 'main-box',
  events: {
    'change input': 'update',
    'click .photo-box': 'getDetails',
    'click .photo-title': 'getDetails',
    'click .tag': 'callTagPage'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'removeFromScreen', 'getDetails', 'callTagPage');
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
    this.model.save({ isCompleted: !(this.model.get('isCompleted'))});
    this.removeFromScreen();
  },

  getDetails: function() {
    TripList.PlacesRouter.navigate('places/' + this.model.get('id'), { trigger: true });
  },

  callTagPage: function(evt) {
    evt.stopPropagation();
    var selectedTag = evt.currentTarget.innerText;
    //TripList.vent.trigger('showTagPage', selectedTag);
    var route = "tagged/" + selectedTag;

    TripList.PlacesRouter.navigate(route, { trigger: true });
  }

});
