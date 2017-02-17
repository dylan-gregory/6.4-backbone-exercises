var Backbone = require('backbone');

var blogTemplate = require('../../templates/blogTemplate.hbs');
var blogDeetsTemplate = require('../../templates/blogDeetsTemplate.hbs');

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBlog)
  },
  render: function(){
    return this;
  },
  addBlog: function(blog){
    var blogItem = new BlogView({model: blog});
    this.$el.append(blogItem.render().el);
  }
});

var BlogView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: blogTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BlogDeetsView = Backbone.View.extend({
  className: 'well',
  template: blogDeetsTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

module.exports = {
  BlogListView: BlogListView,
  BlogView: BlogView,
  BlogDeetsView: BlogDeetsView
};
