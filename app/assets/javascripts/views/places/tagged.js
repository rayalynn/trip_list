TripList.Views.TaggedPlaces = Backbone.Marionette.CollectionView.extend({
  itemView: TripList.Views.PlaceItemView, 

  template: JST['places/index'],
  el: '.main',
  url: '/places',
  collection: TripList.Collections.Places, 

  initialize: function(tag) {
    var self = this;
    this.tag = tag.tag;
    console.log("In tagged places view");
  },

  render: function() {
    console.log("Calling Tagged ");
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

  showPlacesToVisit: function() {
    $(this.el).html('');
    var incompleteItems = this.collection.matchingTags(this.tag);
    console.log("show----");
    debugger;
    _(incompleteItems).each(function(item) {
      this.appendPlace(item);
    }, this);

  },

  appendNewItem: function() {
    console.log("This collection updated.");
    var collection = this.collection.fetch();
  }

});

