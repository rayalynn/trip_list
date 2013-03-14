TripList.Views.SingleItemBigView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/big_place'],

  initialize: function() {
    debugger;
  },
  render: function() {
    return this.$el.append(this.template(this.model));

  }
});
