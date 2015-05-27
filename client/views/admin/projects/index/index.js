Template.adminProjectsIndexInvitation.events({
	'click .btn-accept': function () {
		Roles.update(this.myRole()._id, { $set: { accepted: true } });
	},
	'click .btn-deny': function () {
		Roles.remove(this.myRole()._id);
	}
});