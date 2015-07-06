ProjectController = RouteController.extend({
	layoutTemplate: 'projectLayout',
	waitOn: function() {
    	return [
    		subs.subscribe('project', this.params._id)
    	];
    },
	data: function () {
		return Projects.findOne(this.params._id)
	},
});

var mustBeApproved = function() {
	var project = Projects.findOne(this.params._id);
	if (project) {
		if (!project.itsApproved()) {
			this.router.go('project.description.edit', this.params, { replaceState: true });
		} else {
			this.next();
		}
	}
}

Router.route('project/:_id', {
	name: 'project.index',
	controller: 'ProjectController',
	onBeforeAction: function() {
		this.router.go('project.indicators.index', this.params, { replaceState: true });
	}
});

Router.route('project/:_id/description', {
	name: 'project.description.show',
	controller: 'ProjectController'
});

Router.route('project/:_id/description/edit', {
	name: 'project.description.edit',
	controller: 'ProjectController'
});

Router.route('project/:_id/description/review', {
	name: 'project.description.review',
	controller: 'ProjectController'
});

Router.route('project/:_id/review', {
	name: 'project.review.index',
	controller: 'ProjectController'
});

Router.route('project/:_id/review/history', {
	name: 'project.review.history',
	controller: 'ProjectController'
});

Router.route('project/:_id/review/:reviewId', {
	name: 'project.review.show',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.review = Reviews.findOne(this.params.reviewId);
		}
		return project;
	},
});

/*
Router.route('project/:_id/conversations', {
	name: 'project.messages.index',
	controller: 'ProjectController'
});

Router.route('project/:_id/conversations/new', {
	name: 'project.messages.newConversation',
	controller: 'ProjectController'
});

Router.route('project/:_id/conversations/:conversationSlug', {
	name: 'project.messages.conversation',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.messages = Messages.find({ projectId: this.params._id, conversationSlug: this.params.conversationSlug }, { orderBy: { createdAt: -1 } });
			project.conversation = Messages.findOne({ projectId: this.params._id, conversationSlug: this.params.conversationSlug }).conversation;
		}
		return project;
	},
});

*/

Router.route('project/:_id/files', {
	name: 'project.files.index',
	controller: 'ProjectController'
});

Router.route('project/:_id/files/create', {
	name: 'project.files.create',
	controller: 'ProjectController'
});

Router.route('project/:_id/files/:fileId', {
	name: 'project.files.show',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.file = Files.findOne(this.params.fileId);
		}
		return project;
	},
});

Router.route('project/:_id/tasks', {
	name: 'project.tasks.index',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/tasks/create', {
	name: 'project.tasks.create',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/tasks/:taskId', {
	name: 'project.tasks.show',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.task = Tasks.findOne(this.params.taskId);
		}
		return project;
	},
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/timeline', {
	name: 'project.posts.index',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/timeline/new', {
	name: 'project.posts.create',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/indicators', {
	name: 'project.indicators.index',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/indicators/new', {
	name: 'project.indicators.create',
	controller: 'ProjectController',
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/indicators/:indicatorId', {
	name: 'project.indicators.show',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.indicator = Indicators.findOne(this.params.indicatorId);
		}
		return project;
	},
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/indicators/:indicatorId/edit', {
	name: 'project.indicators.edit',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.indicator = Indicators.findOne(this.params.indicatorId);
		}
		return project;
	},
	onBeforeAction: mustBeApproved
});

Router.route('project/:_id/indicators/:indicatorId/edit-data', {
	name: 'project.indicators.addData',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.indicator = Indicators.findOne(this.params.indicatorId);
		}
		return project;
	},
	onBeforeAction: mustBeApproved
});

/*
Router.route('project/:_id/inbox', {
	name: 'project.mails.index',
	controller: 'ProjectController'
});

Router.route('project/:_id/inbox/compose', {
	name: 'project.mails.create',
	controller: 'ProjectController'
});

Router.route('project/:_id/inbox/:mailId', {
	name: 'project.mails.show',
	controller: 'ProjectController',
	data: function () {
		var project = Projects.findOne(this.params._id);
		if (project) {
			project.mail = Mails.findOne(this.params.mailId);
		}
		return project;
	},
});

*/

Router.route('project/:_id/roles', {
	name: 'project.roles.index',
	controller: 'ProjectController'
});

Router.route('project/:_id/roles/invite', {
	name: 'project.roles.invite',
	controller: 'ProjectController'
});
