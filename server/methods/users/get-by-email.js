Meteor.methods({
	usersGetByEmail: function(email) {
		check(email, String);

		var user = Meteor.users.findOne(
			{ emails: { $elemMatch: { address: email } } },
			{ fields: { profile: 1 } }
		);

		user.email = email;
		
		return user;
	}
})