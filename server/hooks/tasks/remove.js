Tasks.before.remove(function(userId, doc) {
  TasksEvents.remove({ taskId: doc._id });
})