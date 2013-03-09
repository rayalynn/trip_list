TripList.Layouts.AppLayout = Backbone.Marionette.Layout.extend({
  template: 'places/app_layout', 
  regions: {
    header:  '.header',
    sidebar: '.sidebar',
    main:    '.main_app'
  },
  onRender: function() {
    var headerView = new TripList.Views.Header();
    this.header.show(headerView);
    var sidebarView = new TripList.Views.Sidebar({model: this.model});
    this.sidebar.show(sidebarView);
    var mainView = new TripList.Views.Places({collection: this.options.collections, user: this.model});
    this.main.show(mainView); 
  }

});
