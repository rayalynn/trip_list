TripList.Views.SingleItemBigView = Marionette.ItemView.extend({

  model: TripList.Models.Place,
  template: JST['places/details'],

  render: function() {
    return this.$el.append(this.template(this.model));

  }
});
