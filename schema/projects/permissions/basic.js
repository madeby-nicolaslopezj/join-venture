Projects.allow({
	insert: function (userId, doc) {
		return userId;
	},
	update: function (userId, doc, fields, modifier) {
		if (Meteor.users.findOne(userId).isAdmin()) {
			return true;
		}
	}
});

Projects.allow({
	remove: function (userId, doc) {
		if (Meteor.users.findOne(userId) && Meteor.users.findOne(userId).isAdmin()) {
			return true;
		}
	}
});

Projects.deny({
	update: function(userId, doc, fields, modifier) {
		if (!userId) {
			return true;
		}
	}
})
