Template.adminUsersInvest.helpers({
	collection: function () {
		return Meteor.users;
	},
	doc: function() {
		return Meteor.user();
	}
});