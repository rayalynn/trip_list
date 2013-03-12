TripList.Layouts.AppLayout = Backbone.Marionette.Layout.extend({
  template: 'layouts/app_layout',
  regions: {
    header:  '.header',
    sidebar: '.sidebar',
    content: '.main'
  },

  //automatically add main content area back 
  initialize: function() {
    this.content.on("close", function() {
      $('<div class="main span9"></div>').appendTo($('.app'));
    });
  },

  //Load header, sidebar, and main content area
  onRender: function() {
    var headerView = new TripList.Views.Header();
    this.header.show(headerView);
    var sidebarView = new TripList.Views.Sidebar({model: this.model});
    this.sidebar.show(sidebarView);
    var contentView = new TripList.Views.PlacesIndex({collection: this.options.collections, user: this.model});
    this.content.show(contentView); 
  },
});

