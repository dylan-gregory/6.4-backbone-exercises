var Backbone = require('backbone');

var Link = Backbone.Model.extend({
  idAttribute: '_id'
});

var LinkCollection = Backbone.Collection.extend({
  model: Link,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/links'
});

module.exports = {
  Link: Link,
  LinkCollection: LinkCollection
};
