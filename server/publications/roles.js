Meteor.publish("my-roles", function () {
	return Roles.find({userId: this.userId});
});