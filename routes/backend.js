BackendController = RouteController.extend({
	layoutTemplate: 'backendLayout',
	waitOn: function() {
    	return [subs.subscribe('backend')];
    }
});

Router.route('/backend/projects', {
	name: 'backend.projects.index',
	controller: 'BackendController'
});

Router.route('/backend/projects/:_id', {
	name: 'backend.projects.show',
	controller: 'BackendController',
	data: function() {
    	return {
    		project: Projects.findOne({ _id: this.params._id })
    	};
    }
});

Router.route('/backend/users', {
	name: 'backend.users.index',
	controller: 'BackendController'
});

Router.route('/backend/users/:_id', {
	name: 'backend.users.show',
	controller: 'BackendController',
	data: function() {
    	return {
    		user: Meteor.users.findOne({ _id: this.params._id })
    	};
    }
});

Router.route('/backend/investors', {
	name: 'backend.investors.index',
	controller: 'BackendController'
});