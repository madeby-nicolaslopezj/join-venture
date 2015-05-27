Meteor.methods({
	projectsInvite: function (projectId, email, role) {
		var user = Meteor.users.findOne({ emails: { $elemMatch: { address: email } } });
		var project = Projects.findOne(projectId);

		if (!project.canInvite(this.userId)) {
			throw new Meteor.Error("not-authorized", "You are not authorized to do this");
		}

		if (!user) {
			throw new Meteor.Error("user-not-found", "This user is not registered, you can only invite registered users");
		}

		if (!project) {
			throw new Meteor.Error("project-not-found", "Project not found");
		}

		var data = {
			accepted: false,
			userId: user._id,
			projectId: project._id,
			type: 'entrepreneur',
			role: role
		}

		return Roles.insert(data);
	}
});