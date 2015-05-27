Template.backendUsersShowRoles.events({
	'click .remove-btn': function () {
		Roles.remove({ _id: this._id });
	}
});