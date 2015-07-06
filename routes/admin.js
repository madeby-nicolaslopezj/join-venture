Router.map(function() {

	this.route('admin.projects.index', {
		layoutTemplate: 'adminLayout',
		path: '/projects',
        waitOn: function() {
        	return subs.subscribe('projects');
        }
	});

	this.route('admin.projects.create', {
		layoutTemplate: 'adminLayout',
		path: '/projects/create'
	});

	this.route('admin.users.edit', {
		layoutTemplate: 'adminLayout',
		path: '/'
	});

	/*this.route('admin.users.invest', {
		layoutTemplate: 'adminLayout',
		path: '/invest'
	});*/

	this.route('admin.users.password', {
		layoutTemplate: 'adminLayout',
		path: '/change-password'
	});

});

Router.plugin('ensureSignedIn', {
    except: ['atSignIn', 'atSignUp', 'atForgotPassword']
});
