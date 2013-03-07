TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace', 'renderIncompleteItems');
    console.log("In places view");
    this.render();
  },

  render: function() {
    console.log("Render called in PlacesIndex");
    $(this.el).append(this.template({user: this.options.user}));
    this.$el.append("<ul></ul>");
    this.renderIncompleteItems();
    return this;
  },

  renderIncompleteItems: function() {
    var incompleteItems = this.collection.models.filter(function(item){
      return item.get('isCompleted') === false });

    _(incompleteItems).each(function(item) {
      this.appendPlace(item);
    }, this);

  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    $(this.el).append(placeItemView.render().el);
  },

});
