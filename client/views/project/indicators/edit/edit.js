AutoForm.addHooks('projectIndicatorsEditForm', {
	onSuccess: function () {
		Router.go('project.indicators.index', Router.current().params);
	}
});