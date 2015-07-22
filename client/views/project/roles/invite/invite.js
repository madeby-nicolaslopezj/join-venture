Template.projectRolesInvite.events({
	'click [type="submit"]': function(event, template) {
		var projectId = this._id;
		var email = template.$("[name='email']").val();
		var role = template.$("[name='role']").val();
		var isInvestor = template.$('input[type=checkbox]').is(':checked')
		Meteor.call('projectsInvite', projectId, email, role, isInvestor, function (error, result) {
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
