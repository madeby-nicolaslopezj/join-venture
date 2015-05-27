Template.projectMailsIndexRow.events({
	'click .inbox-row': function (event) {
		Router.go('project.mails.show', { _id: this.projectId, mailId: this._id });
	}
});