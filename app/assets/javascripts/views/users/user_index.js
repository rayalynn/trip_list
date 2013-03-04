TripList.Views.UserIndex = Backbone.View.extend({

  template: JST['user/index'],

  el: '.user-profile',

  initialize: function() {
    console.log("User Index View called");
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    $(this.el).append(this.template({ user: this.collection.user }));
    return this;
  }
});
