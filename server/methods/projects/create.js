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

		_.each(Meteor.settings.autoAnalists, function(email) {
			var analist = Meteor.users.findOne({ emails: { $elemMatch: { address: email } } });
			if (analist && this.userId != analist._id) {
				Roles.insert({
					type: 'analist',
					role: 'Analist',
					userId: analist._id,
					projectId: projectId,
					accepted: true
				});
			}
		});

		return projectId;
	}
});
