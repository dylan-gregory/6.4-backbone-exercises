var $ = require('jquery');
var Backbone = require('backbone');

require('./router.js');
var views = require('./views/blogViews.js');
var models = require('./models/models.js');
var blogForm = require('../templates/blogForm.hbs');

$(function(){
  Backbone.history.start();

});
