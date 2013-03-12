TripList.Views.NewPlace = Backbone.Marionette.ItemView.extend({
  el: '.main',
  template: 'places/newPlace',
  initialize: function() {
    _.bindAll(this, 'render', 'submitData');
    console.log("New Place View loaded");
    this.form = new Backbone.Form({
      schema: {
        title: 'Text',
        location: 'Text',
        notes:    'TextArea',
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
    $(this.el).html('');
    TripList.vent.trigger('showToVisitPage');
  }
});

