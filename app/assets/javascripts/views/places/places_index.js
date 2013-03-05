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
    $(this.el).append("<ul class='placeList'></ul>");
    debugger;
    _(this.collection.models).each(function(item) {
      this.appendPlace(item);
    }, this);
    return this; 
  },

  appendPlace: function(item) {
    var placeListView = new TripList.Views.PlaceListView({
      model: item
    });
    $('ul',this.el).append(placeListView.render().el);
  }

});
