var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models.js');
var views = require('./views/bookViews.js');

var BookRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'book/:id/': 'readBook'
  },
  initialize: function(){
    this.bookList = new models.BookCollection();
  },
  index: function(){
    var seeBooks = new views.BookListView({collection: this.bookList});
    console.log(this.bookList);
    $('.app').html(seeBooks.render().el);
    this.bookList.fetch();
  },
  readBook: function(id){
    var currentBook = this.bookList.findWhere({'_id': id});
    var bookDeets = new views.BookDeetsView({model: currentBook});
    $('.app').html(bookDeets.render().el);
  }
});

var myRouter = new BookRouter();

module.exports = myRouter;
