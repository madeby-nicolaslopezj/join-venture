Template.projectTasksShowComment.events({
	'keyup textarea': function(event, template) {
		if (template.$('textarea').val()) {
			if (Router.current().data().task.isOpen) {
				template.$('.btn-default').html('Close and comment')
			} else {
				template.$('.btn-default').html('Comment and reopen')
			}
		} else {
			if (Router.current().data().task.isOpen) {
				template.$('.btn-default').html('Close task')
			} else {
				template.$('.btn-default').html('Reopen task')
			}
		}
	},
	'click .btn-primary': function (event, template) {
		TasksEvents.insert({
			taskId: Router.current().data().task._id,
			userId: Meteor.userId(),
			type: 'comment',
			comment: template.$('textarea').val(),
		})
		template.$('textarea').val("");
	},
	'click .btn-default': function(event, template) {
		if (Router.current().data().task.isOpen) {
			if (template.$('textarea').val()) {
				TasksEvents.insert({
					taskId: Router.current().data().task._id,
					userId: Meteor.userId(),
					type: 'comment',
					comment: template.$('textarea').val(),
				})
			}
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'close',
			})
			Tasks.update(Router.current().data().task._id, { $set: { isOpen: false } });
		} else {
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'reopen',
			})
			if (template.$('textarea').val()) {
				TasksEvents.insert({
					taskId: Router.current().data().task._id,
					userId: Meteor.userId(),
					type: 'comment',
					comment: template.$('textarea').val(),
				})
			}
			Tasks.update(Router.current().data().task._id, { $set: { isOpen: true } });
		}
		
		
		template.$('textarea').val("");
	}
});

Template.projectTasksShow.helpers({
	isAssign: function () {
		return _.findWhere(Router.current().data().task.assignees, this.userId) ? 'selected' : '';
	}
});

Template.projectTasksShow.rendered = function () {
	var template = this;
	var tags = this.data.tasksTags();
	var options = tags.map(function(text) {
		return {
			text: text,
			value: text
		}
	})
	$('[name="tags"]').selectize({
	    delimiter: ',',
	    persist: false,
	    create: function(input) {
	        return {
	            value: input,
	            text: input
	        }
	    },
	    options: options,
	    onItemAdd: function(value, $item) {
			Tasks.update(Router.current().params.taskId, { $addToSet: { tags: value } });
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'tag',
				tag: value
			})
		},
		onItemRemove: function(value) {
			Tasks.update(Router.current().params.taskId, { $pull: { tags: value } });
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'untag',
				tag: value
			})
		}
	});
	$('[name="assignees[]"]').selectize({
		render: {
			option: function(item, escape) {
				var user = Meteor.users.findOne(item.value);
	            return '<div style="padding-top: 6px"><p><b>' + user.name() + '</b><br><span class="label label-primary">' + user.roleInProject(Router.current().params._id).role + '</span></p></div>';
	        }
		},
		onItemAdd: function(value, $item) {
			Tasks.update(Router.current().params.taskId, { $addToSet: { assignees: value } });
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'assign',
				assignedId: value
			})
		},
		onItemRemove: function(value) {
			Tasks.update(Router.current().params.taskId, { $pull: { assignees: value } });
			TasksEvents.insert({
				taskId: Router.current().data().task._id,
				userId: Meteor.userId(),
				type: 'unassign',
				assignedId: value
			})
		}
	});
	$('.datetimepick').datepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
        }
    })
    .datepicker("update", Tasks.findOne(Router.current().data().task._id).dueDate)
    .on('changeDate', function (ev) {
		var date = template.$('.datetimepick').val();
		Tasks.update(Router.current().data().task._id, { $set: { dueDate: date } });
	});
};