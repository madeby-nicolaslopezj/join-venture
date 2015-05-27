Template.backendProjectsShowAddUser.events({
	'keyup .email-search': function(event) {
		var email = $(event.target).val();
		var user = Meteor.users.findOne({ emails: { $elemMatch: { address: email } } });
		if (user) {
			$("input[data-schema-key='userId']").val(user._id);
			$(".found-status").html('yes');
		} else {
			$("input[data-schema-key='userId']").val('');
			$(".found-status").html('no');
		}
	}
});


Template.backendProjectsShowAddUser.helpers({
	projectId: function() {
		return Router.current().data().project._id;
	}
});