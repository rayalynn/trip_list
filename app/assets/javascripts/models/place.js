TripList.Models.Place = Backbone.Model.extend({

   //Creating new place and updating doesn't work without this
   url: function() {
        u = "/places"
        if ( this.id ) {
            u += "/" + this.id;
        }
        return u;
    }
});
