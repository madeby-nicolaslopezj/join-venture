Template.backendUsersShow.helpers({
	activeView: function () {
		return 'backendUsersShow' + Session.get('backendUsersShowActiveView');
	},
	isActiveView: function(view) {
		return Session.get('backendUsersShowActiveView') == view ? 'active' : '';
	}
});

Template.backendUsersShow.events({
	'click .nav a': function (event) {
		var template = $(event.target).attr('data-template');
		Session.set('backendUsersShowActiveView', template);
	}
});

Template.backendUsersShow.rendered = function () {
	Session.set('backendUsersShowActiveView', 'Index');
};