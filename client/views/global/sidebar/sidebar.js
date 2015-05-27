Template.sidebarHeader.events({
	'click .logout-btn': function () {
		Meteor.logout();
	}
});

Template.sidebarHeader.onRendered(function() {
  $('.oc-sidebar-header [title]').tooltip({
    placement: 'left'
  });
})