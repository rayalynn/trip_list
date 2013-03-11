TripList.Views.VisitedPlaces = Backbone.Marionette.CollectionView.extend({
  itemView: TripList.Views.PlaceItemView, 

  template: JST['places/index'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  render: function() {
    console.log("Calling main render function");
    this.showVisitedPlaces();
    this.init_masonry();
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

  showVisitedPlaces: function() {
    console.log("Showing complete places");
    $(this.el).html('');
    var completedItems = this.collection.completedPlaces();
    _(completedItems).each(function(item) {
      this.appendPlace(item);
    }, this);
  },

  appendPlace: function(item) {
    var placeItemView = new TripList.Views.PlaceItemView({
      model: item,
    });
    var renderRetval = placeItemView.render()
    this.$el.append(renderRetval);
  },


});

