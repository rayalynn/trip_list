TripList.Views.Places = Backbone.Marionette.CollectionView.extend({
  itemView: TripList.Views.PlaceItemView, 

  template: JST['places/index'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  initialize: function() {
    var self = this;

    _.bindAll(this, 'render', 'appendPlace', 'init_masonry',
             'showVisitedPlaces', 'appendNewItem');

    TripList.vent.on('showVisitedPlaces', function() {
      console.log("in show visited places on main");
      self.showVisitedPlaces();
    });

    this.collection.bind('add', this.appendNewItem);
    this.collection.bind('remove', this.render);
  },

  render: function() {
    console.log("Calling main render function");
    if (this.el === undefined) {
      console.log("Creating el");
      $('<div class="main_app"></div>').appendTo('.maincol');
      this.el = '.main_app';
    }
    this.showPlacesToVisit();
    this.init_masonry();
    //return this;
  },

  init_masonry: function() {
    var $container = $(this.el);
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
    $(this.el).html('');
    var incompleteItems = this.collection.remainingPlaces();
    _(incompleteItems).each(function(item) {
      //$('<div class="main-box"></div>').appendTo($('.main_app'));
      this.appendPlace(item);
    }, this);

  },

  showVisitedPlaces: function() {
    console.log("Showing complete places");
    $(this.el).html('');
    var completedItems = this.collection.completedPlaces();
    _(completedItems).each(function(item) {
      //$('<div class="main-box"></div>').appendTo($('.main_app'));
      this.appendPlace(item);
    }, this);
  },

  appendNewItem: function() {
    console.log("This collection updated.");
    var collection = this.collection.fetch();
  }

});
