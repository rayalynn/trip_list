TripList.Views.Places = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main',

  initialize: function() {
    var self = this;

    _.bindAll(this, 'render', 'appendPlace',
             'showVisitedPlaces', 'showPlacesToVisit');

    TripList.vent.on('showVisitedPlaces', function() {
      console.log("View Place show visited places");
      self.showVisitedPlaces();
    });
    TripList.vent.on('showPlacesToVisit', function() {
      self.showPlacesToVisit();
    });

    this.collection.bind('change', this.render);
  },

  render: function() {
    console.log("Render being called in Places View");
    $('.main_app').append(this.template());
    this.showPlacesToVisit();
    return this;
  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    var renderRetval = placeItemView.render()
    this.$('.place-row:last').append(renderRetval);
  },

  showPlacesToVisit: function() {
    $('.main').html('');
    debugger;
    var incompleteItems = this.collection.remainingPlaces();

    //Add pictures to row
    _(incompleteItems).each(function(item, index) {
      //Create new row if there are more than 3 items
      if (((index) % 3) === 0) {
        $('<div class="row-fluid place-row"></div>').appendTo($('.main'));
      }
      this.appendPlace(item);
    }, this);

  },

  showVisitedPlaces: function() {
    $('.main').html('');
    var completedItems = this.collection.completedPlaces();

    _(completedItems).each(function(item, index) {

      //Create new row if there are more than 3 items
      if (((index) % 3) === 0) {
        $('<div class="row-fluid place-row"></div>').appendTo($('.main'));
      }

      this.appendPlace(item);
    }, this);

  },

});
