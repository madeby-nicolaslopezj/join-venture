Template.backendProjectsShow.helpers({
	activeView: function () {
		return 'backendProjectsShow' + Session.get('backendProjectsShowActiveView');
	},
	isActiveView: function(view) {
		return Session.get('backendProjectsShowActiveView') == view ? 'active' : '';
	}
});

Template.backendProjectsShow.events({
	'click .nav a': function (event) {
		var template = $(event.target).attr('data-template');
		Session.set('backendProjectsShowActiveView', template);
	}
});

Template.backendProjectsShow.rendered = function () {
	Session.set('backendProjectsShowActiveView', 'Index');
};