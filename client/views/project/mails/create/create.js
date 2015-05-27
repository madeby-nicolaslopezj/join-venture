Template.projectMailsCreate.rendered = function () {
	$("[data-schema-key='receivers']").selectize();
};

Template.projectMailsCreate.helpers({
	getProjectId: function () {
		return Router.current().params._id;
	},
	getUserId: function() {
		return Meteor.userId();
	}
});