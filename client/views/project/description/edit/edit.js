var hasPermissions = function() {
	var role = Meteor.user().roleInProject(Router.current().params._id);
	return role && role.type == 'entrepreneur';
}

Template.projectDescriptionEdit.helpers({
	hasPermissions: function() {
		return hasPermissions();
	},
	doesntHavePermissions: function() {
		return !hasPermissions()
	},
	getReview: function() {
		var review = Router.current().data().lastestReview();
		if (review) {
			review.key = String(this.name).replace('description.', '');
		}
		return review;
	},
  getCategories: function() {
    var categories = _.without(ProjectsDescriptionSchema._firstLevelSchemaKeys, 'name');
    return categories.map(function (category) {
      return {
        key: category,
        title: ProjectsDescriptionSchema._schema[category].label
      }
    });
  },
  getActiveCategory: function() {
    var current = Session.get('projectDescriptionEditFormActiveCategory');
    return current && 'description.' + current;
  },
  isActiveCategory: function() {
    return this.key == Session.get('projectDescriptionEditFormActiveCategory') ? 'btn-default disabled' : 'btn-primary';
  }
});

Template.projectDescriptionEdit.events({
  'click .btn[category]': function () {
    Session.set('projectDescriptionEditFormActiveCategory', this.key);
  }
});

Template.projectDescriptionEdit.onRendered(function() {
  Session.set('projectDescriptionEditFormActiveCategory', _.without(ProjectsDescriptionSchema._firstLevelSchemaKeys, 'name')[0]);
  $('a').click(function() {
    if (Router.current().route.getName() != 'project.description.edit') return;
    $('.projectDescriptionEditFormSubmit').click();
  })
})

AutoForm.addHooks('projectDescriptionEditForm', {
	onSuccess: function(formType, result) {
		toastr.success('The project was successfully saved', 'Project saved');
	},
  onError: function(formType, error) {
		toastr.error('There was an error saving the project', 'Error');
	}
});
