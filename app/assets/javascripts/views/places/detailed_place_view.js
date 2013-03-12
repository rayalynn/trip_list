TripList.Views.DetailedItemView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/item_details'],
  el: '.main',

  render: function() {
    return this.$el.append(this.template(this.model));

  }
});
