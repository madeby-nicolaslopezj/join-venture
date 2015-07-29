Template.adminUsersEdit.helpers({
	collection: function () {
		return Meteor.users;
	},
	doc: function() {
		return Meteor.user();
	}
});

AutoForm.addHooks('adminUsersEditForm', {
	onSuccess: function(formType, result) {
		toastr.success('Your profile was successfully saved', 'Profile Saved');
	},
  onError: function(formType, error) {
		toastr.error('There was an error saving your profile', 'Error');
	}
});
