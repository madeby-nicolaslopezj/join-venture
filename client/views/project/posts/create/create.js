Template.projectPostsCreate.helpers({
	getProjectId: function () {
		return Router.current().params._id;
	},
	getUserId: function() {
		return Meteor.userId();
	}
});

AutoForm.addHooks('projectPostsCreateForm', {
	onSuccess: function () {
		Router.go('project.posts.index', Router.current().params);
	}
});