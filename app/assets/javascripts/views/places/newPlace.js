TripList.Views.NewPlace = Backbone.View.extend({
  el: '.main',
  template: JST['places/newPlace'],
  initialize: function() {

    _.bindAll(this, 'render', 'submitData');
    console.log("New Place View loaded");
    $(this.el).html('');

    this.form = new Backbone.Form({
      schema: {
        title:    'Text',
        headline: 'Text',
        notes:    'Text',
      }
    });
  },
  events: {
    'click .submit': 'submitData'
  },

  render: function() {
    this.form.render();
    $(this.el).append(this.form.el);
    $('form').append('<input type="submit" class="submit" value="submit"/>');

  },

  submitData: function(evt) {
    var data = this.form.getValue();
    var place = new TripList.Models.Place(data);
    place.save();
    evt.preventDefault();
    TripList.vent.trigger('changeToPlacesToVisit');
  }
});

