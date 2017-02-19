var $ = require('jquery');
var Backbone = require('backbone');

var blogForm = require('../../templates/blogForm.hbs');
var blogTemplate = require('../../templates/blogTemplate.hbs');
var blogDeetsTemplate = require('../../templates/blogDeetsTemplate.hbs');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  id: 'blog-post-form',
  className: 'well',
  events: {
    'submit': 'postBlog'
  },
  render: function(){
    this.$el.html(blogForm());
    return this;
  },
  postBlog: function(event){
    event.preventDefault();

    this.collection.create({
      title: $('.blog-title').val(),
      blog: $('.blog-text').val()
    });

    $('.blog-title').val('');
    $('.blog-text').val('');

  }
});

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
  className: 'list-group-item clearfix',
  template: blogTemplate,
  events: {
    'click .delete-btn': 'delete'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  },
  delete: function(event){
    event.preventDefault();

    this.model.destroy();
  },
  remove: function(){
  this.$el.remove();
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

// module.exports = {
//   BlogListView: BlogListView,
//   BlogView: BlogView,
//   BlogDeetsView: BlogDeetsView
// };

console.log(BlogFormView);

module.exports = {
  BlogFormView: BlogFormView,
  BlogListView: BlogListView,
  BlogView: BlogView,
  BlogDeetsView: BlogDeetsView
};
