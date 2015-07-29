Template.adminUsersInvest.helpers({
	collection: function () {
		return Meteor.users;
	},
	doc: function() {
		return Meteor.user();
	}
});

AutoForm.addHooks('adminUsersInvestForm', {
	onSuccess: function(formType, result) {
		toastr.success('Your investor profile was successfully saved', 'Investor Profile Saved');
	},
  onError: function(formType, error) {
		toastr.error('There was an error saving your investor profile', 'Error');
	}
});
