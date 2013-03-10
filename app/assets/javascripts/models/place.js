TripList.Models.Place = Backbone.Model.extend({
  //From http://blog.markstarkman.com/blog/2012/02/13/getting-backbone-dot-js-to-sync-with-rails-and-mongoid/
  idAttribute: '_id',
  url: '/places'
});
