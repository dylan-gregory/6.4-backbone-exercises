var Backbone = require('backbone');

var bookTemplate = require('../../templates/bookTemplate.hbs');
var bookDeetsTemplate = require('../../templates/bookDeetsTemplate.hbs');

var BookListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBook)
  },
  render: function(){
    return this;
  },
  addBook: function(book){
    var bookItem = new BookView({model: book});
    this.$el.append(bookItem.render().el);
  }
});

var BookView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: bookTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BookDeetsView = Backbone.View.extend({
  className: 'well',
  template: bookDeetsTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  BookListView: BookListView,
  BookView: BookView,
  BookDeetsView: BookDeetsView
};
