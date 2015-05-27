Template.projectIndicatorsAddData.helpers({
	fields: function () {
		return Router.current().data().indicator.type;
	},
	getIndicatorId: function () {
		return Router.current().params.indicatorId;
	},
	getUserId: function() {
		return Meteor.userId();
	}
});

AutoForm.addHooks('projectIndicatorsAddDataForm', {
	onSuccess: function () {
		Router.go('project.indicators.index', Router.current().params);
	}
});