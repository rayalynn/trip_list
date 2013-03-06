TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace');
    console.log("In places view");
    this.render();
  },

  render: function() {
    console.log("Render called");
    $(this.el).append(this.template({user: this.options.user}));
    $(this.el).append("<ul class='placeList'></ul>");
    _(this.collection.models).each(function(item) {
      this.appendPlace(item);
    }, this);
    return this; 
  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item
    });
    $('ul',this.el).append(placeItemView.render().el);
  }

});
