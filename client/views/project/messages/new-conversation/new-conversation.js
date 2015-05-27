Template.projectMessagesNewConversation.rendered = function () {
	var setHeight = function() {
	    var newHeight2 = $(".projectMessagesLayout").height() - $(".conversation-title").outerHeight() - $(".conversation-footer").outerHeight() - 30;
	    $(".conversation-content").height(newHeight2);
	};
	$(window).resize(setHeight);
	setHeight();
};
Template.projectMessagesNewConversation.events({
	'click .btn': function (event, template) {
		var message = {
			projectId: Router.current().data()._id,
			type: 'text',
			conversation: template.$("input").val(),
			text: template.$("textarea").val(),
		}
		Messages.insert(message);
		var slug = encodeURIComponent(slugify(message.conversation));

		Router.go('project.messages.conversation', { _id: Router.current().data()._id, conversationSlug: slug })
	}
});