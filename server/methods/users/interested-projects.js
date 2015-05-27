Meteor.methods({
  addToInterested: function (name) {
    return Meteor.users.update(this.userId, { $addToSet: { 'investorProfile.interestedProjects': name } })
  },
  removeFromInterested: function (name) {
    return Meteor.users.update(this.userId, { $pull: { 'investorProfile.interestedProjects': name } })
  }
});