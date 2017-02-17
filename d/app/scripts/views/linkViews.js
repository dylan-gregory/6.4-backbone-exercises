var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var select2 = require('../../../node_modules/select2/dist/js/select2.min.js');

console.log(select2);
var formTemplate = require('../../templates/urlFormView.hbs');
var linkTemplate = require('../../templates/linkView.hbs');
var tagTemplate = require('../../templates/tagView.hbs');

var LinkFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  events: {
    'submit': 'postLink'
  },
  initialize: function(){
    // $(".tag-box").select2({
    //   tags: true,
    //   tokenSeparators: [',', ' ']
    // });
  },
  render: function(){
    this.$el.html(formTemplate());
    return this;
  },
  postLink: function(event){
    event.preventDefault();

    this.collection.create({
      link: $('.website-url').val(),
      title: $('.website-title').val(),
      tag: $('.tag-box').val()
    });

    $('.website-url').val('');
    $('.website-title').val('');
    $('.tag-box').val('');
  }

});

var LinkListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group link-list col-md-6',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addLink);
  },
  render: function(){
    return this;
  },
  addLink: function(link){
    console.log('link', link);
    var linkItem = new LinkView({model: link});
    this.$el.append(linkItem.render().el);
  },
  showFilter: function(tag){
    var filteredData = this.collection.where({tag: tag});
    $('.link-list').html('');
    filteredData.forEach(this.renderCategory, this);
    // return this;
  },
  renderCategory: function(link){
    console.log('link2', link);
    var linkItem = new LinkView({model: link});
    console.log('linkItem', linkItem);
    $('.link-list').append(linkItem.render().$el);
  }
});

var LinkView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: linkTemplate,
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});


var TagListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  template: tagTemplate,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addTag);
  },
  render: function(){
    // var tagList = _.uniq(this.collection.map(function(item)
    // {return item['tag']
    //   }));
    return this;
  },
  addTag: function(tag){
    // console.log(this.collection);
    var tagItem = _.uniq(this.collection.map(function(item){
      return item.toJSON().tag;
    }));

    this.$el.html(tagTemplate({tagItem:tagItem}));

    // var self = this;
    // _.each(tagItem, function(item){
    //   self.$el.append(tagTemplate(item));
    // })

    // console.log('tag item', tagItem);
    // console.log('tagItem', tagItem);
    // _.each([{'greeting': 'hello'}], this.$el.append(tagTemplate()));


  }
});

// var TagView = Backbone.View.extend({
//   tagName: 'li',
//   className: 'list-group-item',
//   template: tagTemplate,
//   render: function(){
//     var renderedTemplate = this.template(this.model.toJSON());
//     this.$el.html(renderedTemplate);
//     return this;
//   }
// });

module.exports = {
  LinkFormView: LinkFormView,
  LinkListView: LinkListView,
  LinkView: LinkView,
  TagListView: TagListView,
  // TagView: TagView
};

// var mappedCollection = mycollection.map(function(item) return item['tag']);

// var tagList = _.uniq(collection.map(function(item){return item['tag']}));
