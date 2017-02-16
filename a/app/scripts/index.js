var $ = require('jquery');
var Backbone = require('backbone');

// require('./router.js');
var views = require('./views/formView.js');
var models = require('./models/models.js');
var blogForm = require('../templates/blog-form.hbs');

$(function(){
  // Backbone.history.start();

  var myBlogs = new models.BlogCollection();

  var myBlogForm = new views.BlogFormView({collection: myBlogs });

  $('.app').append(myBlogForm.render().el);
});
