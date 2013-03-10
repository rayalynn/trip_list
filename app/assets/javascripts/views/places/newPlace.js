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
    console.log("Submit data called");
    var data = this.form.getValue();
    console.log("Form: ", data);
    var place = new TripList.Models.Place(data);
    place.save();
    evt.preventDefault();
    data = null;
    form = null;
    console.log("Triggering event");
    TripList.vent.trigger('changeToPlacesToVisit');
  }
});

