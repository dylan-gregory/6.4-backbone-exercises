var $ = require('jquery');

var models = require('./models/models.js');
var views = require('./views/personForm.js');

var formTemplate = require('../templates/personForm.hbs');

$(function(){

  var myPerson = new models.PersonCollection();

  var myForm = new views.PersonFormView({collection: myPerson});
  $('.app').append(myForm.render().el);


});
