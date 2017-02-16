var $ = require('jquery');
var Backbone = require('backbone');

var blogForm = require('../../templates/blog-form.hbs');

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

console.log(BlogFormView);

module.exports = {
  BlogFormView: BlogFormView
}
