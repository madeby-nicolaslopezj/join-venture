Template.backendInvestorsIndex.helpers({
	settings: function () {
		return {
			collection: Meteor.users.find({ investorProfile: { $exists: true } }),
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
				},
				{
					key: 'profile.phone',
					label: 'Phone',
				},
				{
					key: 'investorProfile.interestAreas',
					label: 'Interest'
				},
				{
					key: 'investorProfile.investventRank',
					label: 'Investvent Rank'
				},
				{
					key: 'investorProfile.interestedProjects',
					label: 'Interested Projects',
					fn: function (val, type, doc) {
		        return val.map(function (projectId) {
		        	return Projects.findOne(projectId).description.name
		        }).join(', ');
		      }
				},
			]
		}
	}
});

Template.backendInvestorsIndex.events({
	'click .reactive-table tr': function (event) {
		Router.go('backend.users.show', this);
	}
});