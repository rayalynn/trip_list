TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main_app',
  events: {
    'click .visited-link': 'renderVisitedPlaces',
    'click .toVisit-link': 'showPlacesToVisit'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace',
             'renderVisitedPlaces', 'showPlacesToVisit');
    this.sidebar = new sidebarView({ model: this.options.user });
    this.header = new headerView();
    this.render();
  },

  render: function() {
    console.log("Render called in PlacesIndex");

    //append header
    $(this.el).append(this.header.$el);
    this.header.render();

    //append sidebar
    $(this.el).append(this.sidebar.$el);
    this.sidebar.render();
    $(this.el).append(this.template());

    //append places to visit by default
    this.showPlacesToVisit();
    return this;
  },

  showPlacesToVisit: function() {
    console.log("Showing incomplete items");
    debugger;
    $('.main-places').html('');
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
    debugger;
    $('.main-places').html('');
    var completeItems = this.collection.models.filter(function(item){
      return item.get('isCompleted') === true });

    //Add pictures to row
    _(completeItems).each(function(item, index) {

      //Create new row if there are more than 3 items
      if (((index) % 3) === 0) {
        $('<div class="row-fluid place-row"></div>').appendTo($('.main-places'));
      }

      this.appendPlace(item);
    }, this);

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

var headerView = Backbone.View.extend({
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: JST['places/header'],

  render: function() {
    debugger;
    console.log("Rendering header");
    this.$el.append(this.template);
    this.delegateEvents();
  }
});
