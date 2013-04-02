TripList.Layouts.AppLayout = Backbone.Marionette.Layout.extend({

  el: '.container-fluid',

  template: 'layouts/app_layout',

  regions: {
    header:  '.header',
    sidebar: '.sidebar',
    content: '.main'
  },

});

