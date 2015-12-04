if (Meteor.isClient) {
  Template.registerHelper('homeUrl', function() {
    return Meteor.settings.public.homeUrl;
  });
}
