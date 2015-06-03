Projects.before.remove(function(userId, doc) {
  Files.remove({ projectId: doc._id });
  Indicators.remove({ projectId: doc._id });
  Posts.remove({ projectId: doc._id });
  Reviews.remove({ projectId: doc._id });
  Roles.remove({ projectId: doc._id });
  Tasks.remove({ projectId: doc._id });
});