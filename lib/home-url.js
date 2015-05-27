homeUrl = 'http://ventureweb.herokuapp.com/';

if (Meteor.isClient) {
  Template.registerHelper('homeUrl', function() {
    return homeUrl;
  })
}