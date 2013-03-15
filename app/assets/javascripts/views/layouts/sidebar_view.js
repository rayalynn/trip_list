TripList.Views.Sidebar = Backbone.Marionette.ItemView.extend({

  template: JST['layouts/sidebar'],

  events: {
    'click .tag': 'callTagPage'
  },

  initialize: function(options) {
    debugger;
    this.tags = options.tags;
  },

  render: function() {
    return this.$el.append(this.template(this.model));
  },

  callTagPage: function(evt) {
    evt.stopPropagation();
    var selectedTag = evt.currentTarget.innerText;
    var route = "tagged/" + selectedTag;
    TripList.PlacesRouter.navigate(route, { trigger: true });
  }

});


