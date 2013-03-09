TripList.Views.PlacesIndex = Backbone.View.extend({

  template: JST['places/index'],
  events: {
    'click .visited-link': 'showVisitedPlaces',
    'click .toVisit-link': 'showPlacesToVisit'
  },
  el: '.main_app',

  initialize: function() {
    _.bindAll(this, 'render', 'appendPlace',
             'showVisitedPlaces', 'showPlacesToVisit');
    //this.render();
  },

  render: function() {
    console.log("Render called in PlacesIndex");
    $('.main_app').append(this.template());
    debugger;
    //append places to visit by default
    this.showPlacesToVisit();
    return this;
  },

  showPlacesToVisit: function() {
    console.log("Showing incomplete items");
    //$('.main-places').html('');
    var incompleteItems = this.collection.remainingPlaces();

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

  showVisitedPlaces: function(evt) {
    console.log("Showing visited places");
    //$('.main-places').html('');
    var completedItems = this.collection.completedPlaces();

    _(completedItems).each(function(item, index) {

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
