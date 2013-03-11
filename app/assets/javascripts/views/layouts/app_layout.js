TripList.Layouts.AppLayout = Backbone.Marionette.Layout.extend({
  template: 'layouts/app_layout',
  regions: {
    header:  '.header',
    sidebar: '.sidebar',
    content: '.content'
  },

  onRender: function() {
    var headerView = new TripList.Views.Header();
    this.header.show(headerView);
    var sidebarView = new TripList.Views.Sidebar({model: this.model});
    this.sidebar.show(sidebarView);
    var contentView = new TripList.Views.UnvisitedPlaces({collection: this.options.collections, user: this.model});
    this.content.show(contentView); 
  }

});

