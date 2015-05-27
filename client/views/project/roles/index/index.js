Template.projectRolesIndex.events({
	'click .delete-role': function () {
		Roles.remove(this._id);
	}
});

Template.projectRolesIndex.rendered = function () {
	$("[rel='tooltip']").tooltip();
};