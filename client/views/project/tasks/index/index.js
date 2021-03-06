Template.projectTasksIndex.rendered = function () {

	Session.set('projectTasksIndexFilterTags', null);
	Session.set('projectTasksIndexFilterAssignees', null);

	$('[name="tags[]"]').selectize({
	    onChange: function(value) {
	    	Session.set('projectTasksIndexFilterTags', value);
		}
	});
	$('[name="assignees[]"]').selectize({
		render: {
			option: function(item, escape) {
				var user = Meteor.users.findOne(item.value);
	            return '<div style="padding-top: 6px"><p><b>' + user.name() + '</b><br><span class="label label-primary">' + user.roleInProject(Router.current().params._id).role + '</span></p></div>';
	        }
		},
		onChange: function(value) {
	    	Session.set('projectTasksIndexFilterAssignees', value);
		}
	});
};

Template.projectTasksIndex.helpers({
	tasks: function () {
		if (Session.get('projectTasksIndexFilterTags') && Session.get('projectTasksIndexFilterAssignees')) {
			return Tasks.find({ 
				projectId: Router.current().params._id,
				tags: { $in: Session.get('projectTasksIndexFilterTags') },
				assignees: { $in: Session.get('projectTasksIndexFilterAssignees'),
				isOpen: !Session.get('showClosedTasks') }
			}, {
				sort: { createdAt: -1 }
			});
		} else if (Session.get('projectTasksIndexFilterTags')) {
			return Tasks.find({ 
				projectId: Router.current().params._id,
				tags: { $in: Session.get('projectTasksIndexFilterTags') },
				isOpen: !Session.get('showClosedTasks')
			}, {
				sort: { createdAt: -1 }
			});
		} else if (Session.get('projectTasksIndexFilterAssignees')) {
			return Tasks.find({ 
				projectId: Router.current().params._id,
				assignees: { $in: Session.get('projectTasksIndexFilterAssignees') }, 
				isOpen: !Session.get('showClosedTasks')
			}, {
				sort: { createdAt: -1 }
			});
		} else {
			return Tasks.find({ projectId: Router.current().params._id, isOpen: !Session.get('showClosedTasks') }, {
				sort: { createdAt: -1 }
			});
		}
	},
	showClosed: function() {
		return Session.get('showClosedTasks');
	}
});

Template.projectTasksIndex.events({
	'change .show-closed-checkbox': function(event, template) {
		Session.set('showClosedTasks', $(event.currentTarget).is(':checked'));
	}
});