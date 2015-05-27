Template.projectIndicatorsCreate.helpers({
	getProjectId: function () {
		return Router.current().params._id;
	},
	getUserId: function() {
		return Meteor.userId();
	}
});

AutoForm.addHooks('projectIndicatorsCreateForm', {
	onSuccess: function () {
		Router.go('project.indicators.index', Router.current().params);
	}
});