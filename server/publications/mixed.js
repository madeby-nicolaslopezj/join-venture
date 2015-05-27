Meteor.publish("backend", function () {
	if (!Meteor.users.findOne(this.userId) || !Meteor.users.findOne(this.userId).isAdmin()) {
		return [];
	}
	return [
		Projects.find({}),
		Roles.find({}),
		Meteor.users.find({}, {
			fields: { 
				"services.google.accessToken": 0,
				"services.google.expiresAt": 0,
				"services.google.idToken": 0,
				"services.linkedin.accessToken": 0,
				"services.linkedin.expiresAt": 0,
				"services.password": 0,
				"services.resume":0,
			} 
		})
	];
});