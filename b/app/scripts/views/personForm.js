var $ = require('jquery');
var Backbone = require('backbone');

var personFormTemplate = require('../../templates/personForm.hbs');

var PersonFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  events: {
    'submit': 'postPerson'
  },
  render: function(){
    this.$el.html(personFormTemplate());
    return this;
  },
  postPerson: function(event){
    event.preventDefault();

    this.collection.create({
      first: $('.first-name').val(),
      last: $('.last-name').val(),
      address: $('.address').val(),
      phone: $('.phone-number').val()
    });

    $('.first-name').val('');
    $('.last-name').val('');
    $('.address').val('');
    $('.phone-number').val('');

  }
});

module.exports = {
  PersonFormView: PersonFormView
};
