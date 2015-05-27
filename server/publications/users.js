Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId}, { fields: { investorProfile: 1, viewableProjects: 1 } });
  } else {
    this.ready();
  }
});