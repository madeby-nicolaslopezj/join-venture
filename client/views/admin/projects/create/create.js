Template.adminProjectsCreate.events({
	'click .btn-submit': function () {
		var name = $('[name=projectName]').val();
		if (!name) {
			alert('Please write a name, you can change it after')
			return;
		}
		Meteor.call('projectsCreate', name, function (error, result) {
			Router.go('project.index', {_id: result});
		});
	}
});