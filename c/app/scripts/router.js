var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models.js');
var views = require('./views/blogViews.js');

var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'readBlog'
  },
  initialize: function(){
    this.blogList = new models.BlogCollection();
  },
  index: function(){
    var seeBlogs = new views.BlogListView({collection: this.blogList});
    console.log(this.blogList);
    $('.app').html(seeBlogs.render().el);
    this.blogList.fetch();
  },
  readBlog: function(id){
    var currentBlog = this.blogList.findWhere({'_id': id});
    var blogDeets = new views.BlogDeetsView({model: currentBlog});
    $('.app').html(blogDeets.render().el);
  }
});

var myRouter = new BlogRouter();

module.exports = myRouter;
