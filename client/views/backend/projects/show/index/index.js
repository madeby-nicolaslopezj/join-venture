Template.backendProjectsShowIndex.events({
  'click .btn-delete': function () {
    var confirm = window.confirm('Are you sure you want to delete this project?');
    if (confirm) {
      Projects.remove(this.project._id, function(error) {
        if (error) {
          alert(error.message);
          console.log(error);
        } else {
          Router.go('backend.projects.index');
        }
      });
    }
  }
});