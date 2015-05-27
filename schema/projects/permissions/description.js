Projects.deny({
	update: function (userId, doc, fields, modifier) {
		var user = Meteor.users.findOne(userId);
		if (user.isAdmin()) {
			return false;
		}
		if (_.contains(fields, 'description')) {
			var project = Projects.findOne(doc);

			if (!project.roleOfUser(userId)) {
				return true;
			}

			if (project.roleOfUser(userId).type != 'entrepreneur') {
				return true;
			}
		}
		return false;
	},
});