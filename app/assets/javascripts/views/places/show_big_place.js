TripList.Views.SingleItemBigView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/big_place'],

  events: {
    'click .tag': 'callTagPage'
  },

  initialize: function() {

  },
  render: function() {
    return this.$el.append(this.template(this.model));

  },

  callTagPage: function(evt) {
    evt.stopPropagation();
    var selectedTag = evt.currentTarget.innerText;
    var route = "tagged/" + selectedTag;
    TripList.PlacesRouter.navigate(route, { trigger: true });
  }
});
