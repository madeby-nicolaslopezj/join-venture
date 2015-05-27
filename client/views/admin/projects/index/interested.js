Template.interestedProjects.onRendered(function() {
  HTTP.get(homeUrl + 'api/enterprises', function(error, response) {
    if (!error) {
      Session.set('projectsFromHome', response.data);
    }
  });
})

Template.interestedProjects.helpers({
  projects: function () {
    return Session.get('projectsFromHome');
  }
});

Template.interestedProjects.events({
  'click .deinterest-btn': function() {
    Meteor.call('removeFromInterested', this.patformId);
  },
  'click .interest-btn': function() {
    Meteor.call('addToInterested', this.patformId);
  }
});