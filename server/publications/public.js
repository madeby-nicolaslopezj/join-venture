Meteor.publishComposite('view-project', function(projectId) {
  var user = Meteor.users.findOne(this.userId);
  if (!user.canIView(projectId)) {
    return [];
  }
  return {
    find: function() {
      return Projects.find(projectId);
    },
    children: [
      {
        find: function(project) {
          return Files.find({ projectId: project._id });
        }
      }
    ]
  }
});