TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main_app',
  events: {
    'click .visited-link': 'renderVisitedPlaces',
    'click .toVisit-link': 'renderPlacesToVisit'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace', 'renderIncompleteItems',
             'renderVisitedPlaces', 'renderPlacesToVisit');
    this.sidebar = new sidebarView({ model: this.options.user });
    this.render();
  },

  render: function() {

    //append sidebar
    $(this.el).append(this.sidebar.$el);
    this.sidebar.render();
    $(this.el).append(this.template());

    //append places to visit by default
    this.renderIncompleteItems();
    return this;
  },

  renderIncompleteItems: function() {
    var incompleteItems = this.collection.models.filter(function(item){
      return item.get('isCompleted') === false });

    //Add pictures to row
    _(incompleteItems).each(function(item, index) {

      //Create new row if there are more than 3 items
      if (((index) % 3) === 0) {
        $('<div class="row-fluid place-row"></div>').appendTo($('.main-places'));
      }

      this.appendPlace(item);
    }, this);

  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    $('.place-row:last', this.el).append(placeItemView.render().el);
  },

  renderVisitedPlaces: function(evt) {
    console.log("Showing visited places");
    evt.preventDefault();
  },

  renderPlacesToVisit: function(evt) {
    console.log("Showing places to visit");
    evt.preventDefault();
  }

});

var sidebarView = Backbone.View.extend({
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/sidebar'],

  render: function() {
    console.log("Rendering sidebar");
    this.$el.append(this.template(this.model));
    this.delegateEvents();
  }
});
