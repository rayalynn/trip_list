TripList.Views.NewPlace = Backbone.Marionette.ItemView.extend({
  template: JST['places/new'],
  initialize: function() {
    _.bindAll(this, 'render', 'submitData');
    console.log("New Place View loaded");
    this.form = new Backbone.Form({
      schema: {
        title:    'Text',
        location: 'Text',
        notes:    'TextArea',
        tag_list:  { type: 'Text', title: "Tags (separate with commas)"}
      }
    });
  },
  events: {
    'click .submit': 'submitData'
  },

  render: function() {
    this.$el.append(this.template);
    this.form.render();
    $(this.el).append(this.form.el);
    $(this.el).append('<input type="submit" class="submit" value="submit"/>');
    return this;


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
    TripList.PlacesRouter.navigate("places", {trigger: true});
  }
});

