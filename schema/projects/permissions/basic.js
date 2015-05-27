Projects.allow({
	insert: function (userId, doc) {
		return userId;
	},
	update: function (userId, doc, fields, modifier) {
		if (!userId) {
			return false;
		}
		if (Meteor.users.findOne(userId).isAdmin()) {
			return true;
		}

		// If its only updating the description
		if (!_.isEqual(fields, ['description'])) {
			return false;
		}

		return true;
	},
	remove: function (userId, doc) {
		return userId === doc.createdBy;
	},
	fetch: ['createdBy']
});

