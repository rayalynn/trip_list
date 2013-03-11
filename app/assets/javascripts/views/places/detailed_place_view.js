TripList.Views.DetailedItemView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/item_details'],
  el: '.main',

  initialize: function() {
    console.log("Detailed item view initialized");
    this.render();
  },

  render: function() {
    debugger;
    return this.$el.append(this.template(this.model));

  }
});
