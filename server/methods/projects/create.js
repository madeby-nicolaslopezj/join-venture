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

		var javier = Meteor.users.findOne({ emails: { $elemMatch: { address: 'javier@venturecapital.cl' } } });
		if (javier && this.userId != javier._id) {
			console.log('added javier as analist to ' + name)
			Roles.insert({
				type: 'analist', 
				role: 'Analist', 
				userId: javier._id,
				projectId: projectId,
				accepted: true
			});
		}

		return projectId;
	}
});