Roles.allow({
	insert: function (userId, doc) {
		check(doc, Roles.simpleSchema());

		var project = Projects.findOne(doc.projectId);
		var user = Meteor.users.findOne(doc.userId);

		if (!Meteor.users.findOne(userId).isAdmin()) {
			return false;
		}

		if (!project || !user) {
			return false;
		}

		if (user.roleInProject(project) != null) {
			return false;
		}

		return userId;
	},
	update: function (userId, doc, fields, modifier) {
		if (!Meteor.users.findOne(userId).isAdmin() &&
			doc.userId != userId) {
			return false;
		}

		if (!_.isEqual(fields, ['accepted'])) {
			return false;
		}

		return userId;
	},
	remove: function (userId, doc) {
		if (!doc.canBeRemoved()) {
			return false;
		}

		if (doc.userId == userId) {
			return true;
		}

		if (doc.project().createdBy == userId || Meteor.users.findOne(userId).isAdmin()) {
			return true;
		}

		return false;
	},
});

