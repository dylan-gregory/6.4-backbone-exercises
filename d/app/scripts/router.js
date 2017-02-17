var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models.js');
var views = require('./views/linkViews.js');

var LinkRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'category/:tag': 'category'
  },
  initialize: function(){
    this.linkList = new models.LinkCollection();

  },
  index: function(){
    var myForm = new views.LinkFormView({collection: this.linkList});
    $('.app').html(myForm.render().el);

    var seeLinks = new views.LinkListView({collection: this.linkList});
    $('.app').append(seeLinks.render().el);

    var seeTags = new views.TagListView({collection: this.linkList});
    $('.app').append(seeTags.render().el);

    this.linkList.fetch();
  },
  category: function(tag){

    var seeLinks = new views.LinkListView({collection: this.linkList});
    seeLinks.showFilter(tag);
  }
});

var myLinkRouter = new LinkRouter();

module.exports = myLinkRouter;
