Template.backendUsersShowAddToProject.helpers({
	userId: function() {
		return Router.current().data().user._id;
	}
});