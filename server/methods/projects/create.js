Meteor.methods({
	projectsCreate: function(name) {
		var doc = {};
		var participant;

		if (!this.userId) {
			throw new Meteor.Error("logged-out", "The user must be logged in to create a project.");
		}

		doc.createdBy = this.userId;
		doc.reviewStatus = { analist: false, expert: false, comission: false };
		doc.description = { name: name };

		var projectId = Projects.insert(doc);

		Roles.insert({
			type: 'entrepreneur',
			role: 'Creator',
			userId: this.userId,
			projectId: projectId,
			accepted: true
		});

		var pbello = Meteor.users.findOne({ emails: { $elemMatch: { address: 'pbello@cityglobal.cl' } } });
		if (pbello && this.userId != pbello._id) {
			console.log('added pbello as analist to ' + name)
			Roles.insert({
				type: 'analist',
				role: 'Analist',
				userId: pbello._id,
				projectId: projectId,
				accepted: true
			});
		}

		return projectId;
	}
});
