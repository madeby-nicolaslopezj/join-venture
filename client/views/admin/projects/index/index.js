Template.adminProjectsIndex.onRendered(function() {
  this.autorun(function() {
    Meteor.user().projects().count()
    Tracker.afterFlush(function () {
      $('.masonry').masonry({
        itemSelector: '.masonry-item',
      });
    });
  })
})

Template.adminProjectsIndexInvitation.events({
	'click .btn-accept': function () {
		Roles.update(this.myRole()._id, { $set: { accepted: true } });
	},
	'click .btn-deny': function () {
		Roles.remove(this.myRole()._id);
	}
});