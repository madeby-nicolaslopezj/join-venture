Template.backendUsersIndex.helpers({
	settings: function () {
		return {
			collection: Meteor.users.find(),
			rowsPerPage: 10,
			showFilter: true,
			fields: [
				{
					key: 'profile.firstName',
					label: 'First Name'
				},
				{
					key: 'profile.lastName',
					label: 'Last Name'
				},
				{
					key: 'emails.0.address',
					label: 'Email',
				}
			]
		}
	}
});

Template.backendUsersIndex.events({
	'click .reactive-table tr': function (event) {
		Router.go('backend.users.show', this);
	}
});