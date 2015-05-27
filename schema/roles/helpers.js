Roles.helpers({
	user: function() {
		return Meteor.users.findOne({ _id: this.userId });
	},
	project: function() {
		return Projects.findOne({ _id: this.projectId });
	},
	canBeRemoved: function() {
		var project = Projects.findOne(this.projectId);
		var user = Meteor.users.findOne(this.userId);

		if (project.rolesAndInvitations().count() <= 1) {
			return false;
		}

		if (project.createdBy == user._id) {
			return false;
		}

		return true;
	},
	typeIs: function(compare) {
		return this.type == compare;
	}
});