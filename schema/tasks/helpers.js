Tasks.helpers({
	tasksEvents: function() {
		return TasksEvents.find({ taskId: this._id });
	},
	joinedTags: function() {
		return this.tags ? this.tags.join(',') : '';
	},
});

TasksEvents.helpers({
	typeIs: function(type) {
		return this.type == type;
	},
	selfAssign: function() {
		return this.userId == this.assignedId;
	}
});