TasksEventsSchema = new SimpleSchema({
	type: {
		type: String,
		allowedValues: ['comment', 'close', 'reopen', 'assign', 'unassign', 'tag', 'untag'],
	},
	tag: {
		type: String,
		optional: true
	},
	assignedId: {
		type: String,
		optional: true
	},
	comment: {
		type: String,
		optional: true
	},
	taskId: {
		type: String
	},
	userId: {
		type: String
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	},
});

TasksEvents.attachSchema(TasksEventsSchema);

TasksSchema = new SimpleSchema({
	projectId: {
		type: String,
	},
	title: {
		type: String,
	},
	tags: {
		type: [String],
		optional: true
	},
	assignees: {
		type: [String],
		optional: true
	},
	dueDate: {
		type: Date,
		optional: true
	},
	isOpen: {
		type: Boolean,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (this.isInsert) {
				return true;
			} else if (this.isUpsert) {
				return {$setOnInsert: true};
			}
		}
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true,
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	},
})

Tasks.attachSchema(TasksSchema);