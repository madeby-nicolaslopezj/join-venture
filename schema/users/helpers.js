Meteor.users.helpers({
	name: function() {
		if (this.profile) {
			if (this.profile.firstName || this.profile.lastName) {
				return this.profile.firstName + ' ' + this.profile.lastName;
			}
		}
		return 'No name';
	},
	projects: function() {
		var roles = Roles.find({ userId: this._id, accepted: true }).fetch();
		var projectIds =_.pluck(roles, 'projectId');
		return Projects.find({ _id: { $in: projectIds } });
	},
	invitations: function() {
		var roles = Roles.find({ userId: this._id, accepted: false }).fetch();
		var projectIds =_.pluck(roles, 'projectId');
		return Projects.find({ _id: { $in: projectIds } });
	},
	projectsAndInvitations: function() {
		var roles = Roles.find({ userId: this._id }).fetch();
		var projectIds =_.pluck(roles, 'projectId');
		return Projects.find({ _id: { $in: projectIds } });
	},
	roles: function() {
		return Roles.find({ userId: this._id, accepted: true });
	},
	roleInProject: function(projectId) {
		return Roles.findOne({ projectId: projectId, userId: this._id });
	},
	isInvestor: function() {
		return !!this.investorProfile;
	},
	isInterested: function(projectId) {
		return this.isInvestor() && _.contains(this.investorProfile.interestedProjects, projectId);
	},
	canIView: function(projectId) {
		return _.contains(this.viewableProjects, projectId);
	},
	isAdmin: function() {
		var found = false;
		this.emails.map(function (email) {
			var admins = Meteor.settings.public.admins;
			if (_.contains(admins, email.address)) {
				found = true;
			}
		});
		return found;
	}
});
