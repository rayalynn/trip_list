TripList.Views.Places = Backbone.View.extend({

  template: JST['places/index'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  initialize: function() {
    var self = this;

    _.bindAll(this, 'render', 'appendPlace', 'init_masonry',
             'showVisitedPlaces', 'showPlacesToVisit',
             'appendNewItem');

    TripList.vent.on('showVisitedPlaces', function() {
      console.log("in show visited places on main");
      //self.showVisitedPlaces();
      self.render();
    });
    TripList.vent.on('showPlacesToVisit', function() {
      console.log("In main show places to visit event");
      self.showPlacesToVisit();
      self.render();
    });

    this.collection.bind('add', this.appendNewItem);
    this.collection.bind('remove', this.render);
  },

  render: function() {
    debugger;
    console.log("Calling main render function");
    this.collection.fetch();
    this.showPlacesToVisit();
    this.init_masonry();
    return this;
  },

  init_masonry: function() {
    var $container = $('.main');
    var gutter = 40;
    var min_width = 200;
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.main-box',
            gutterWidth: gutter,
            isAnimated: true,
              columnWidth: function( containerWidth ) {
                var num_of_boxes = (containerWidth/min_width | 0);

                var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0) ;

                if (containerWidth < min_width) {
                    box_width = containerWidth;
                }

                $('.main-box').width(box_width);

                return box_width;
              }
        });
    });

  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    var renderRetval = placeItemView.render()
    this.$el.append(renderRetval);
  },

  showPlacesToVisit: function() {
    this.collection.fetch();
    $('.main').html('');
    var incompleteItems = this.collection.remainingPlaces();
    _(incompleteItems).each(function(item) {
      this.appendPlace(item);
    }, this);

  },

  showVisitedPlaces: function() {
    console.log("Showing complete places");
    $('.main').html('');
    var completedItems = this.collection.completedPlaces();
    _(completedItems).each(function(item) {
      $('<div class="main-box"></div>').appendTo($('.main'));
      this.appendPlace(item);
    }, this);

  },

  appendNewItem: function() {
    console.log("This collection updated.");
    var collection = this.collection.fetch();
    debugger;
        //var lastItem = this.collection.last;
  }

});
