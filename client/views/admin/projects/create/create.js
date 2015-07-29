Template.adminProjectsCreate.events({
	'click .btn-submit': function () {
		var name = $('[name=projectName]').val();
		if (!name) {
			alert(TAPi18n.__('projects.create.errors.noName'))
			return;
		}
		Meteor.call('projectsCreate', name, function (error, result) {
			Router.go('project.index', {_id: result});
		});
	}
});
