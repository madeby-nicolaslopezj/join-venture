Meteor.methods({
	usersRemoveFromProject: function (userId, projectId) {
		check(projectId, String);
		check(userId, String);

		var project = Projects.findOne(projectId);
		var user = Meteor.users.findOne(userId);

		
		if (!Meteor.users.findOne(this.userId).isAdmin()) {
			throw new Meteor.Error("not-authorized", "You are not authorized to do this");
		}

		if (!project || !user) {
			throw new Meteor.Error("not-found", "User or project not found");
		}

		if (!user.roleInProject(project)) {
			throw new Meteor.Error("exists", "User is not project");
		}

		if (userId == project.createdBy) {
			throw new Meteor.Error("cant-remove", "Can't remove the creator from the project");
		}

		return Projects.update(projectId, { $pull: { participants: { userId: userId } } });
	}
});