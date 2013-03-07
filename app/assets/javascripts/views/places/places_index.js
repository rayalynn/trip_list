TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace', 'renderIncompleteItems');
    this.sidebar = new sidebarView({ model: this.options.user });
    this.render();
  },

  render: function() {
    $(this.el).append(this.sidebar.$el);
    this.sidebar.render();
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

var sidebarView = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/sidebar'],

  render: function() {
    console.log("Rendering sidebar");
    debugger;
    this.$el.append(this.template(this.model));
    this.delegateEvents();
  }
});
