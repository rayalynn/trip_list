TripList.Layouts.AppLayout = Backbone.Marionette.Layout.extend({
  template: 'places/app_layout', 
  regions: {
    header:  '.header',
    sidebar: '.sidebar',
  },
  onRender: function() {
    console.log("On render called");
    var headerView = new TripList.Views.Header();
    this.header.show(headerView);
  }

});
