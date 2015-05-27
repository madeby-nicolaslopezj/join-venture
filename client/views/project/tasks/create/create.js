Template.projectTasksCreate.events({
	'click .btn.btn-primary': function (event, template) {
		var taskId = Tasks.insert({
        	title: template.$('[name="title"]').val(),
        	projectId: Router.current().params._id
        });	

		TasksEvents.insert({
			taskId: taskId,
			userId: Meteor.userId(),
			type: 'comment',
			comment: template.$('[name="description"]').val(),
		})
		
		Router.go('project.tasks.show', { _id: Router.current().params._id, taskId: taskId });
	}
});