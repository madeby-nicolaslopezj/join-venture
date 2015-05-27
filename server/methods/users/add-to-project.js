Meteor.methods({
	usersAddToProject: function (data) {
		data.accepted = true;
		check(data, Roles.simpleSchema());

		var project = Projects.findOne(data.projectId);
		var user = Meteor.users.findOne(data.userId);

		if (!Meteor.users.findOne(this.userId).isAdmin()) {
			throw new Meteor.Error("not-authorized", "You are not authorized to do this");
		}

		if (!project || !user) {
			throw new Meteor.Error("not-found", "User or project not found");
		}

		if (user.roleInProject(project) != null) {
			throw new Meteor.Error("exists", "User is in project");
		}

		return Roles.insert(data);
	}
});