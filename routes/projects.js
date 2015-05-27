Router.map(function() {

	this.route('projects.show.index', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

	this.route('projects.show.description', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id/description',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

	this.route('projects.show.description.edit', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id/description/edit',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

	this.route('projects.show.timeline', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id/timeline',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

	this.route('projects.show.team', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id/team',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

	this.route('projects.show.team.add', {
		layoutTemplate: 'projectsShowLayout',
		path: '/projects/:_id/team/add',
		waitOn: function() {
			return subs.subscribe('project', this.params._id);
		},
		data: function() {
			return {
				project: Projects.findOne({_id: this.params._id})
			}
		}
	});

});