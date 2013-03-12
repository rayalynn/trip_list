TripList.Views.Places = Backbone.Marionette.CollectionView.extend({
  itemView: TripList.Views.PlaceItemView, 

  template: JST['places/tagged'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  initialize: function() {
  },

  render: function() {
    console.log("Calling main render function");
    this.showPlacesToVisit();
    this.init_masonry();
    return this;
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

  appendNewItem: function() {
    console.log("This collection updated.");
    var collection = this.collection.fetch();
  }

});

