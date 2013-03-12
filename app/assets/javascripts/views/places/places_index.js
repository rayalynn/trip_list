/* Main view for all places. Shows Unvisited and Visted places.
 * Masonry init code from:
 *   http://www.maurizioconventi.com/2012/06/19/responsive-example-integrating-twitter-bootstrap-and-jquery-masonry/
 */
TripList.Views.PlacesIndex = Backbone.Marionette.CollectionView.extend({

  itemView: TripList.Views.PlaceItemView, 
  template: JST['places/index'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  initialize: function() {
    var self = this;

    TripList.vent.on('showVisitedPlaces', function() {
      self.showVisitedPlaces();
    });
  },

  render: function() {
    this.showPlacesToVisit();
    this.init_masonry();
    return this;
  },

  showPlacesToVisit: function() {
    $(this.el).html('');
    var incompleteItems = this.collection.remainingPlaces();
    _(incompleteItems).each(function(item) {
      this.appendPlace(item);
    }, this);
  },
  
  //Create new view for each individual place and append to main
  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    this.$el.append(placeItemView.render());
  },

  //Load up masonry to display photos Pinterest style
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
        if (containerWidth < min_width) { box_width = containerWidth; }
          $('.main-box').width(box_width);
          return box_width;
        }
      });
    });
  },
});
