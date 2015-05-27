Template.projectRolesInvite.events({
	'click [type="submit"]': function(event) {
		var projectId = this._id;
		var email = $("[name='email']").val();
		var role = $("[name='role']").val();
		Meteor.call('projectsInvite', projectId, email, role, function (error, result) {
			if (error) {
				console.log(error);
				Session.set('projectRolesInviteError', error);
			} else {
				Router.go('project.roles.index', { _id: projectId });
			}
		});
	}
});

Template.projectRolesInvite.helpers({
	error: function () {
		return Session.get('projectRolesInviteError');
	}
});

Template.projectRolesInvite.rendered = function () {
	Session.set('projectRolesInviteError', null);
};